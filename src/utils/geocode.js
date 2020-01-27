const request = require('request')
const chalk = require('chalk')
// encodeURIComponent - translate some symbols into URL acceptable string (in case of crashes)
const geocode = (address, callback) => {
    const url =  `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoic2NvdXJnZTA3NyIsImEiOiJjazVvMjd1angwMWY3M2VwaWxiM2ZpYTM4In0.XL94ouURbrsX8Im1BU2fOA&limit=1`
    
        request({ url, json: true}, (error, {body}) => {
            if (error) {
                callback('Unable to connect to location services', undefined) 
    
            } else if (body.features.length === 0) {
                callback ('Unable to find location, try another search, please ;)', undefined)
            } else {
                callback(undefined, { 
                    latitude: body.features[0].center[1],
                    longitude: body.features[0].center[0],
                    location: body.features[0].place_name
                })
            }
        })
    }

    
    module.exports = geocode