const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=392f1ad26babfe49d1849f80dbe56685&units=metric`);
    return resp.data.main.temp;
}


module.exports = {
    getClima
}