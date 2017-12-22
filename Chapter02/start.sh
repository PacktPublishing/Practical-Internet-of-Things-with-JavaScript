cd broker
mosca -c index.js -v | pino &
cd ../api-engine
npm start &
cd ../web-app
ng serve &