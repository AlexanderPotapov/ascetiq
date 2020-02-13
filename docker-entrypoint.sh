#!/bin/sh

node node_modules/requirejs/bin/r.js -o requirejs.build.js

set -e

# /usr/src/app/external-public kan be mounted as a volume on host to expose
# statics to be hosted by host nginx
if [ -d /usr/src/app/external-public ]; then
	cp -R /usr/src/app/public/* /usr/src/app/external-public/
fi

exec "$@"
