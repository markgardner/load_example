#!/bin/bash

docker run --name web0$1 -itd -p 902$1:9020 -e APP_NAME=web0$1 web node app/index