# Ping Pong Bot

This is a bot to ping a url passed by the api. You can run a preiodic ping to this api every 29.9 minutes to keep your heroku instance alive.

If you want a 24h instance on heroku i suggest to have a different acc for each instance kept alive 24h as heroku free plan has 1000hrs/month limit. It means one 24h instance can be run for 41 days and two can be for 20.5 days.

Send a post request to /pingback?link=https://example.com for it to ping the link

One-Click Deploy:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/patheticGeek/ping-pong-bot)
