#!/bin/sh

app.get('*',function(req,res,next){
  if(req.headers['x-forwarded-proto']!='https')
    res.redirect('https://ascetiq.com'+req.url)
  else
    next() 
})

set -e

# /usr/src/app/external-public kan be mounted as a volume on host to expose
# statics to be hosted by host nginx
if [ -d /usr/src/app/external-public ]; then
	cp -R /usr/src/app/public/* /usr/src/app/external-public/
fi

exec "$@"
