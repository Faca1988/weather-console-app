const colors = require('colors');
const argv = require('./config/yargs').argv;
const location = require('./location/location');
const weather = require('./weather/weather');


let getInfo = async(place) => {
    await location.getLocationLatLng(place)
        .then(async(resp) => {
            let data = await weather.getWeatherByLatLng(resp.lat, resp.lng);
            // console.log(`Ciudad: ${data.name} - ºC: ${data.temp}`);
            console.log(`ºC: ${data.temp}`.green);
        })
        .catch(err => console.log(colors.red(err)));
};

getInfo(argv.location);