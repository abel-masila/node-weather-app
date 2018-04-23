const yargs=require('yargs');
const request=require('request');
const geocode=require('./geocode/geocode');

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

geocode.geocodeAddress(argv.address, (errorMessage, results)=>{
    if(errorMessage){
        console.log(errorMessage);
    } else{
        console.log(JSON.stringify(results, undefined, 2))
    }
});

request({
    url:'https://api.darksky.net/forecast/3708bcb6e2a477e7fb94de8fd3ecdfab/-1.2920659,36.8219462',
    json:true
},(error,response,body)=>{
    if(!error && response.statusCode===200){
        console.log(body.currently.temperature)
    } else{
        console.log("Unable to fetch weather");
    }
   
})

