const request = require('request')
const chalk = require('chalk')


// // encodeURIComponent - translate some symbols into URL acceptable string (in case of crashes)
const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/e46aea09786f2a4366756e230e64df36/${encodeURIComponent(latitude)}`+','+`${encodeURIComponent(longitude)}?units=si&lang=en`
    request({url, json: true}, (error, {body}) => {
        debugger
        if (error) {
            callback('Unable to connect to forecast services', undefined)
        } else if (body.error) {
            callback('Unable to find location. Maybe wrong coordinates?', undefined)
        } else {
            const temperature = body.currently.temperature
            const windSpeed = body.currently.windSpeed
            const apparentTemp = body.currently.apparentTemperature
            const infa = body.daily.data[0].summary + ` It is currently ${temperature} degrees out. Apparent temperature is ${apparentTemp} degrees out. Wind speed is ${windSpeed} m/s `
            callback(undefined,infa)
        }
    })
}
module.exports = forecast
   

