const request= require('request');

const geocodeAddress = (address,callback) => {
    const encodedAddress=encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body)=>{
        if(error){
            callback('Unable to connect to google servers');
        } else if(body.status==='ZERO_RESULTS'){
            callback('Unable to find that address');
        } else if(body.status==='OK'){
            callback(undefined,{
                address: body.results[0].formatted_address,
                lat:body.results[0].geometry.location.lat,
                lng:body.results[0].geometry.location.lng
            })
        } 
    });
}
//export module
module.exports.geocodeAddress =geocodeAddress;