#!/bin/bash -
#title           :vozejkmap.sh
#description     :This script will download data from vozejkmap.cz and load it into given database.
#author          :zimmicz
#date            :20141202
#version         :0.1
#usage           :bash vozejkmap.sh
#bash_version    :4.3.11(1)-release
#==============================================================================
SETTINGS=.settings

if [[ ! -f .settings ]]; then
    touch $SETTINGS

    echo -n "API key (contact info@coex.cz if you don't have one):"
    read KEY
    echo KEY=$KEY > $SETTINGS

    echo -n "Database username:"
    read USER
    echo USER=$USER >> $SETTINGS

    echo -n "Database:"
    read DB
    echo DB=$DB >> $SETTINGS

    echo -n "Output path:"
    read OUT
    echo OUT=$OUT >> $SETTINGS
else
    source $SETTINGS
    echo $USER
fi

if [ -f /tmp/locations.json ] # file exists
then
    if test `find "/tmp/locations.json" -mmin +1440` # file is older than 1 day
    then
        wget http://www.vozejkmap.cz/opendata/locations.json -O /tmp/locations.json
        sed -i 's/\},{/\n},{/g' /tmp/locations.json
        echo -en "$(cat /tmp/locations.json)" > /tmp/locations.json
    fi
else # file does not eixst
    wget http://www.vozejkmap.cz/opendata/locations.json?key=$KEY -O /tmp/locations.json
    sed -i 's/\},{/\n},{/g' /tmp/locations.json
    echo -en "$(cat /tmp/locations.json)" > /tmp/locations.json
fi

touch $OUT/data.json
psql   -h localhost -U $USER -d $DB -f vozejkmap.sql
psql -tA -h localhost -U $USER -d $DB -c "SELECT row_to_json(fc)
 FROM (
    SELECT 'FeatureCollection' AS type,
        array_to_json(array_agg(f)) AS features
        FROM (SELECT 'Feature' AS type,
            ST_AsGeoJSON(lg.geom)::json As geometry,
            row_to_json((SELECT l FROM (SELECT id, title, location_type, description, author_name, attr1, attr2, attr3) AS l
      )) AS properties
   FROM vozejkmap.vozejkmap AS lg ) AS f )  AS fc" | cat - > $OUT/data.json

echo "var data = " | tr -d "\n" > ./map/data/temp
cat $OUT/data.json >> ./map/data/temp
rm -rf $OUT/data.json
mv ./map/data/temp ./map/data/data.json
