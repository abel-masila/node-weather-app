const request= require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=chaka%20place',
    json: true
}, (error, response, body)=>{
    console.log("Printing body", body);
});