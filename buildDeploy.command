#!/bin/bash
PRESENTATION_NAME='novo-ozempic-iva'
PRESENTATION_ID=(1 2 3 4 5 6)

MY_DIRNAME=$(dirname $0)
cd $MY_DIRNAME

for i in ${PRESENTATION_ID[@]}
do
    echo "#####Start Ozempic ID: "$i
    grunt start:$PRESENTATION_NAME:$i & sleep 2; kill $! #build presentation and stop the process after 2 seconds
    echo "" #linebreak
    echo "#####End Ozempic ID: "$i", now deploying..."
    grunt deploy:$i:false:$PRESENTATION_NAME #deploying presentation
    wait $!
    echo "#####Deployed Ozempic ID: "$i", yay!"
done