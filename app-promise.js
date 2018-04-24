const yargs=require('yargs');

const axios=require('axios');

const argv=yargs.
    options({
    a: {
        demand:true,
        alias:'address',
        describe: 'Address to fetch weather for',
        string:true
    } 
    })
    .help()
    .alias('help','h')
    .argv;
    
const encodedAddress=encodeURIComponent(argv.address);
const geocodeURL=`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeURL).then((response)=>{
    if(response.data.status==='ZERO_RESULTS'){
        throw new Error('Unable to find that address!');
    }
    
    const lat=response.data.results[0].geometry.location.lat;
    const lng=response.data.results[0].geometry.location.lng;

    const weatherURL=`https://api.darksky.net/forecast/3708bcb6e2a477e7fb94de8fd3ecdfab/${lat},${lng}`;

    console.log(response.data.results[0].formatted_address);

    return axios.get(weatherURL);
}).then((response)=>{
    const temperature=response.data.currently.temperature;
    const apparentTemperature=response.data.currently.apparentTemperature;
    console.log(`it's currently ${temperature}. It feels like ${apparentTemperature}`);
})
.catch((error)=>{
    if(error.code==='ENOTFOUND'){
        console.log('Unable to connect api service');
    } else {
        console.log(error.message);
    }
})








