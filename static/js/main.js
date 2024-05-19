import { getRandomInt} from "./functions.js";
import { fetchWeather } from "./fetchweather.js";

console.log('JS is working')

//display random location

fetchWeather(getRandomInt(-90,90), getRandomInt(-180,180));

//location
let location_found = false;

const findLocation = () => {

    const success = (position) => {
        let location_latitude_value = position.coords.latitude.toFixed(6);
        let longitude_latitude_value = position.coords.longitude.toFixed(6);
        fetchWeather(location_latitude_value, longitude_latitude_value);
        
    }

    const error = () => {
        console.log("Locating Failed")
    }

    navigator.geolocation.getCurrentPosition(success,error)

}

document.addEventListener('DOMContentLoaded', findLocation());

//button implementation

const latitude = document.querySelector('.weather_params .latitude');
const longitude = document.querySelector('.weather_params .longitude');


document.addEventListener('DOMContentLoaded', () => {
    const fetch_button = document.getElementById('fetch_button');
    if (fetch_button){

        fetch_button.addEventListener('click', (e) => {
            e.preventDefault();

            validateInputs();

        });

    }
});


//input validation

const setError = (element, message) => {
    const input_class = element.parentElement;
    const error_display = input_class.querySelector('.params_error')

    error_display.innerText = message;
    input_class.classList.add('validation_error');
    input_class.classList.remove('validation_success');
}

const setSuccess = element => {
    const input_class = element.parentElement;
    const error_display = input_class.querySelector('.params_error')

    error_display.innerText = '';
    input_class.classList.remove('validation_error');
    input_class.classList.add('validation_success');
}

const validateInputs = () => {
    let valitated = true;
    let latitude_value = latitude.value.trim();
    let longitude_value = longitude.value.trim();



    if(latitude_value === ''){
        valitated = false;
        setError(latitude, 'Latitude is required')
    } else if (latitude_value < -90 || latitude_value > 90){
        valitated = false;
        setError(latitude, 'Latitude needs to be a value between -90° and 90°');
    }
    else {
        latitude_value = parseFloat(latitude_value);
        setSuccess(latitude)
    }

    if(longitude_value === ''){
        valitated = false;
        setError(longitude, 'Longitude is required')
    } 
    else if (longitude_value < -180 || longitude_value > 180){
        valitated = false;
        setError(longitude, 'Longitude needs to be a value between -180° and 180°');
    }
    else {
        longitude_value = parseFloat(longitude_value);
        setSuccess(longitude)
    }

    if(valitated){
        fetchWeather(latitude_value.toFixed(6), longitude_value.toFixed(6));
    }

};
