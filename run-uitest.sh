#!/bin/bash
BASE_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
SUITE=""

if [ "$1" ]; then
    SUITE="--suite=$1"
fi

cd $BASE_DIR
GRUNT_OPTIONS="$SUITE" ./run-in-docker.sh