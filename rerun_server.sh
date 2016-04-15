#!/usr/bin/env bash

sudo kill -9 `cat /t/wedweb.pid`
w
git up
gunicorn wedweb:app -p /t/wedweb.pid -D --access-logfile /t/guniaccess.log --error-logfile /t/gunierror.log --log-level info