const request= require('request');

const yargs=require('yargs');

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
 console.log(argv.a);
 const encodedAddress=encodeURIComponent(argv.address);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
}, (error, response, body)=>{
   console.log(`Address ${body.results[0].formatted_address}`);
   console.log(`Lat ${body.results[0].geometry.location.lat}`)
   console.log(`Long ${body.results[0].geometry.location.lng}`)
});