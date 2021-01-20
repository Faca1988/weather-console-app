const axios = require('axios');
// const request = require('request');

const apiAddress = encodeURI('https://weatherapi-com.p.rapidapi.com/forecast.json');
const headers = {
    'x-rapidapi-key': 'b7f3873f1dmsh298c2ae5124db6ap15b072jsn8147f776e4e7',
    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
};

const getLocationLatLng = async(place_name) => {

    const encodeURL = encodeURI(place_name);

    var options = {
        method: 'GET',
        url: `${apiAddress}`,
        params: {
            //days: '3',
            q: `${encodeURL}`
        },
        headers
    };

    //axios.request(options);
    //.then( (response) => console.log(response.data))
    //.catch( (error) => console.error(error) );

    return new Promise((resolve, reject) => {
        axios.request(options)
            .then((result) => {
                const city = result.data.location;
                //const weather = result.data.current;
                let resp = {
                    name: city.name,
                    lat: city.lat,
                    lng: city.lon
                        /*,
                            temp: weather.temp_c
                        */
                };
                resolve(resp);
            })
            .catch((err) => {
                const response = err.response;
                const fail = response.data.error;
                let error = {
                    status: response.status,
                    statusText: response.statusText,
                    code: fail.code,
                    message: fail.message
                };

                reject(error);
            });
    });
};

module.exports = {
    getLocationLatLng
};