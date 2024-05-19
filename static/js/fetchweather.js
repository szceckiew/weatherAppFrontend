import {date_info, img_number} from "./functions.js";

export async function fetchWeather(latitude, longitude) {

    

    var location = document.querySelectorAll('.location .editable');
    location[0].textContent = latitude + '°';
    location[1].textContent = longitude + '°';


    let url = `https://weatherappback-pga4.onrender.com/${latitude}/${longitude}`;


    const response = await fetch(url);
    const data = await response.json();

    console.log(data);


    //weather today
    var weatherToday = document.querySelectorAll('.weather_today .editable');
    
    var returned_date_info = date_info(data.date[0]);

    weatherToday[0].textContent = returned_date_info[0];
    weatherToday[1].textContent = returned_date_info[1];
    weatherToday[2].textContent = data.max_temp[0] + '°C';
    weatherToday[3].textContent = data.min_temp[0] + '°C';   
    weatherToday[4].textContent = data.gen_energy[0] + 'kWh';
    weatherToday[5].src = img_number(data.weather_code[0]);

    //weather later
    var weatherLate = document.querySelectorAll('.weather_column .editable')

    
    let i = 0;

    for (let index = 1; index < 7; index++){
        returned_date_info = date_info(data.date[index]);
        weatherLate[i].textContent = returned_date_info[0];
        weatherLate[i+1].textContent = returned_date_info[1];
        weatherLate[i+2].src = img_number(data.weather_code[index]);
        weatherLate[i+3].textContent = data.max_temp[index] + '°C';
        weatherLate[i+4].textContent = data.min_temp[index] + '°C';
        weatherLate[i+5].textContent = data.gen_energy[index] + 'kWh';

        i = i + 6;

    }


    /*
    weekday
    date
    gen_energy
    max-temp
    min-temp
    weather-code

    0-1
    2
    3
    45-48
    51-57 80-82
    61-67
    71-77 85-86
    95-99
    */
}