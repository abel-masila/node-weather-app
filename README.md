# Command Line node Js weather App
This simple app makes use of the google geocode api and the darksky weather api to get the current weather update. 

To run this app...

- git clone this project and run `npm install`
-To test the application, type in `node app-promise.js -a 'Nairobi'`

I am using axios to return a promise , so if your request is resolved, the out put should be something like: 


If you add an address which does'nt exist, the promise is rejected and returns an error which looks like:
