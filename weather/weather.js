const request=require('request');
const getWeather=(lat,lng, callback)=>{
    request({
        url:`https://api.darksky.net/forecast/3708bcb6e2a477e7fb94de8fd3ecdfab/${lat},${lng}`,
        json:true
    },(error,response,body)=>{
        if(error){
            callback('Unable to connect to weather api');
        } else if(response.statusCode===400){
            callback('Unable to fetch weather')
        } else if(response.statusCode===200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } 
    })
}

module.exports.getWeather=getWeather;