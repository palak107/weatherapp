


 
// const cityInput = document.querySelector('.cityinput');
// const searchBtn = document.querySelector('.searchbtn');

// const apiKey = '12a4c088f10fd5a199d58fe9767d1a36';
// searchBtn.addEventListener('click', () => {
// if (cityInput.value.trim()!=''){

//     console.log(cityInput.value); // Use cityInput's value for further processing
//     cityInput.value=""
//     cityInput.blur()
// }
// });

// cityInput.addEventListener('keydown',(event)=>{
//       if (event.key == 'Enter' &&
//         cityInput.value.trim() !=''
//       ){
//         updateWeatherInfo(cityInput.value)
//         cityInput.value=""
//      cityInput.blur()
//    }
//  })



//  async function getFetchData(endPoint ,city){
//     const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`
//     const response = await fetch(apiUrl);
//     return response.json()
//     }
//  async function updateWeatherInfo(city){
//     const weatherData= await getFetchData('weather',city)
//     console.log(weatherData)
// }




// const cityInput = document.querySelector('.cityinput');
// const searchBtn = document.querySelector('.searchbtn');
// const notfoundSection = document.querySelector('.not-found');
// const weatherinfo = document.querySelector('.weather-info');
// const searchCitySection = document.querySelector('.search-city'); // Corrected typo here

// const apiKey = '12a4c088f10fd5a199d58fe9767d1a36';

// searchBtn.addEventListener('click', () => {
//     if (cityInput.value.trim() != '') {
//         updateWeatherInfo(cityInput.value);
//         cityInput.value = "";
//         cityInput.blur();
//     }
// });

// cityInput.addEventListener('keydown', (event) => {
//     if (event.key == 'Enter' && cityInput.value.trim() != '') {
//         updateWeatherInfo(cityInput.value);
//         cityInput.value = "";
//         cityInput.blur();
//     }
// });

// async function getFetchData(endPoint, city) {
//     const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;
//     try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         return null;
//     }
// }

// async function updateWeatherInfo(city) {
//     const weatherData = await getFetchData('weather', city);
//     if (!weatherData || weatherData.cod !== 200) {
//         showDisplaySection(notfoundSection);
//         return;
//     }
//     console.log(weatherData); // Ensure this line executes after fetching data
// }

// function showDisplaySection(section) {
//     [weatherinfo, searchCitySection, notfoundSection].forEach(sec => sec.style.display = 'none'); // Changed variable name to 'sec'
//     section.style.display = 'flex';
// }


// const cityInput = document.querySelector('.cityinput');
// const searchBtn = document.querySelector('.searchbtn');
// const notfoundSection = document.querySelector('.not-found');
// const weatherinfo = document.querySelector('.weather-info');
// const searchCitySection = document.querySelector('.search-city'); 
// const countryTxt=document.querySelector('.country-txt')
// const tempTxt=document.querySelector('.temp-txt')
// const cloudTxt =document.querySelector('.cloud-txt');
// const humdidtiyValueTxt=document.querySelector('.humidity-value-txt');
// const windValueTxt=document.querySelector('.wind-value-txt')
// const weatherSummaryimage =document.querySelector('.weather-summary-img')
// const currentDateTxt=document.querySelectorAll('.current-date-txt')

// const conditionTxt =document.querySelector('.condition-txt')
// const apiKey = '12a4c088f10fd5a199d58fe9767d1a36';

// searchBtn.addEventListener('click', () => {
//     if (cityInput.value.trim() != '') {
//         updateWeatherInfo(cityInput.value);
//         cityInput.value = "";
//         cityInput.blur();
//     }
// });

// cityInput.addEventListener('keydown', (event) => {
//     if (event.key == 'Enter' && cityInput.value.trim() != '') {
//         updateWeatherInfo(cityInput.value);
//         cityInput.value = "";
//         cityInput.blur();
//     }
// });

// async function getFetchData(endPoint, city) {
//     const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;
//     try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         return null;
//     }
// }


// function getWeatherIcon(id) { if (id <= 232) return ' assets\assets\weather\atmosphere.svg';
//      if (id <= 321) return 'assets\assets\weather\drizzle.svg'; 
//      if (id <= 531) return 'assets/weather/rain.svg';
//       if (id <= 622) return 'assets\assets\weather\snow.svg'; 
//      if (id <= 781) return 'assets\assets\weather\rain.svg'; 
//      if (id == 800) return 'assets\assets\weather\clouds.svg'; 
//      return 'assets\assets\weather\clouds.svg';
// }
// function getcurrentdate(){
// const currentDate =new Date()
// console.log(currentDate)
// }
// async function updateWeatherInfo(city) {
//     const weatherData = await getFetchData('weather', city);
//     if (!weatherData || weatherData.cod !== 200) {
//         showDisplaySection(notfoundSection);
//         return;
//     }
//     console.log(weatherData); // Ensure this line executes after fetching data;
//     const {
//         name :country,
//         main:{temp,humidity},
//         weather:[{id,main}],
//         wind:{speed}
//     }=weatherData

//     countryTxt.textContent=country


// tempTxt.textContent = `${Math.round(temp)} ℃`;

//    humdidtiyValueTxt.textContent = `${humidity}%`;
//    windValueTxt.textContent = `${speed} m/s`;
//    conditionTxt.textContent=main
//    weatherSummaryimage.src=`C:\Users\palak\OneDrive\Desktop\weather app\assets\assets\weather\${getweathericon(id)}`
//     showDisplaySection(weatherinfo)
// }

// function showDisplaySection(section) {
//     [weatherinfo, searchCitySection, notfoundSection].forEach(sec => sec.style.display = 'none'); // Changed variable name to 'sec'
//     section.style.display = 'flex'; // Ensure the section to be shown is displayed correctly
// }

// // Ensure the image within notfoundSection is also visible
// document.querySelectorAll('.not-found img').forEach(img => {
//     img.style.display = 'block';
// });
// 


// const cityInput = document.querySelector('.cityinput');
// const searchBtn = document.querySelector('.searchbtn');
// const notfoundSection = document.querySelector('.not-found');
// const weatherinfo = document.querySelector('.weather-info');
// const searchCitySection = document.querySelector('.search-city');
// const countryTxt = document.querySelector('.country-txt');
// const tempTxt = document.querySelector('.temp-txt');
// const cloudTxt = document.querySelector('.cloud-txt');
// const humidityValueTxt = document.querySelector('.humidity-value-txt');
// const windValueTxt = document.querySelector('.wind-value-txt');
// const weatherSummaryImage = document.querySelector('.weather-summary-img');
// const currentDateTxt = document.querySelectorAll('.current-date-txt');
// const conditionTxt = document.querySelector('.condition-txt');
// const forecastContainer = document.querySelector('.forecast-items-container'); // Ensure this exists in your HTML

// const apiKey = '12a4c088f10fd5a199d58fe9767d1a36';

// // Event listeners for search button and Enter key
// searchBtn.addEventListener('click', () => {
//     if (cityInput.value.trim() != '') {
//         updateWeatherInfo(cityInput.value);
//         cityInput.value = "";
//         cityInput.blur();
//     }
// });

// cityInput.addEventListener('keydown', (event) => {
//     if (event.key == 'Enter' && cityInput.value.trim() != '') {
//         updateWeatherInfo(cityInput.value);
//         cityInput.value = "";
//         cityInput.blur();
//     }
// });

// // Function to fetch data from OpenWeather API
// async function getFetchData(endPoint, city) {
//     const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;
//     try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         return null;
//     }
// }

// // Function to get the appropriate weather icon based on the weather condition ID
// function getWeatherIcon(id) {
//     if (id <= 232) return 'assets/assets/weather/thunderstorm.svg';
//     if (id <= 321) return 'assets/assets/weather/drizzle.svg';
//     if (id <= 531) return 'assets/weather/rain.svg';
//     if (id <= 622) return 'assets/assets/weather/snow.svg';
//     if (id <= 781) return 'assets/assets/weather/rain.svg';
//     if (id == 800) return 'assets/assets/weather/clear.svg';
//     return 'assets/assets/weather/clouds.svg';
// }

// // Function to get the current date in the desired format
// function getcurrentdate() {
//     const currentDate = new Date();
//     const options = {
//         weekday: "short",
//         day: '2-digit',
//         month: 'short',
//     };
//     return currentDate.toLocaleDateString('en-GB', options);
// }

// // Function to update the main weather info
// async function updateWeatherInfo(city) {
//     const weatherData = await getFetchData('weather', city);
//     if (!weatherData || weatherData.cod !== 200) {
//         showDisplaySection(notfoundSection);
//         return;
//     }

//     console.log(weatherData); // Ensure this line executes after fetching data
//     const {
//         name: country,
//         main: { temp, humidity },
//         weather: [{ id, main }],
//         wind: { speed }
//     } = weatherData;

//     countryTxt.textContent = country;
//     tempTxt.textContent = `${Math.round(temp)} ℃`;
//     humidityValueTxt.textContent = `${humidity}%`;
//     windValueTxt.textContent = `${speed} m/s`;
//     conditionTxt.textContent = main;
//     weatherSummaryImage.src = getWeatherIcon(id);

//     // Display current date on the screen
//     const formattedDate = getcurrentdate();
//     currentDateTxt.forEach(element => {
//         element.textContent = formattedDate;
//     });

//     await updateForecastInfo(city); // Corrected function call
//     showDisplaySection(weatherinfo);
// }

// // Function to update the forecast info
// async function updateForecastInfo(city) {
//     const forecastData = await getFetchData('forecast', city);
//     const todayDate = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
//     forecastContainer.innerHTML = ''; // Clear previous forecast items

//     forecastData.list.forEach(forecast => {
//         const forecastDate = forecast.dt_txt.split(' ')[0]; // Extract the date from the forecast
//         // If the forecast date matches today
//         if (forecastDate === todayDate) {
//             updateForecastDisplay(forecast);
//         }
//     });
// }

// // Function to display each forecast item
// function updateForecastDisplay(weatherData) {
//     const {
//         dt_txt: date,
//         weather: [{ id }],
//         main: { temp }
//     } = weatherData;

//     const forecastItem = `
//     <div class="forecast-item">
//         <h5 class="forecast-item-date regular-txt">${date.split(' ')[1]}</h5> <!-- Only display the time part of the date -->
//         <img src="${getWeatherIcon(id)}" class="forecast-item-img">
//         <h5 class="forecast-item-temp">${Math.round(temp)} ℃</h5>
//     </div>`;

//     forecastContainer.insertAdjacentHTML('beforeend', forecastItem); // Insert new forecast item
// }

// // Function to show the relevant section (current weather, search, or not found)
// function showDisplaySection(section) {
//     [weatherinfo, searchCitySection, notfoundSection].forEach(sec => sec.style.display = 'none');
//     section.style.display = 'flex'; // Ensure the section to be shown is displayed correctly
// }

// // Ensure the image within notfoundSection is also visible
// document.querySelectorAll('.not-found img').forEach(img => {
//     img.style.display = 'block';
// });
const cityInput = document.querySelector('.cityinput');
const searchBtn = document.querySelector('.searchbtn');
const notfoundSection = document.querySelector('.not-found');
const weatherinfo = document.querySelector('.weather-info');
const searchCitySection = document.querySelector('.search-city');
const countryTxt = document.querySelector('.country-txt');
const tempTxt = document.querySelector('.temp-txt');
const cloudTxt = document.querySelector('.cloud-txt');
const humidityValueTxt = document.querySelector('.humidity-value-txt');
const windValueTxt = document.querySelector('.wind-value-txt');
const weatherSummaryImage = document.querySelector('.weather-summary-img');
const currentDateTxt = document.querySelectorAll('.current-date-txt');
const conditionTxt = document.querySelector('.condition-txt');
const forecastContainer = document.querySelector('.forecast-items-container'); // Ensure this exists in your HTML

const apiKey = '12a4c088f10fd5a199d58fe9767d1a36';

// Event listeners for search button and Enter key
searchBtn.addEventListener('click', () => {
    if (cityInput.value.trim() != '') {
        updateWeatherInfo(cityInput.value);
        cityInput.value = "";
        cityInput.blur();
    }
});

cityInput.addEventListener('keydown', (event) => {
    if (event.key == 'Enter' && cityInput.value.trim() != '') {
        updateWeatherInfo(cityInput.value);
        cityInput.value = "";
        cityInput.blur();
    }
});

// Function to fetch data from OpenWeather API
async function getFetchData(endPoint, city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

// Function to get the appropriate weather icon based on the weather condition ID
function getWeatherIcon(id) {
    if (id <= 232) return 'assets/assets/weather/thunderstorm.svg';
    if (id <= 321) return 'assets/assets/weather/drizzle.svg';
    if (id <= 531) return 'assets/weather/rain.svg';
    if (id <= 622) return 'assets/assets/weather/snow.svg';
    if (id <= 781) return 'assets/assets/weather/rain.svg';
    if (id == 800) return 'assets/assets/weather/clear.svg';
    return 'assets/assets/weather/clouds.svg';
}

// Function to get the current date in the desired format
function getcurrentdate() {
    const currentDate = new Date();
    const options = {
        weekday: "short",
        day: '2-digit',
        month: 'short',
    };
    return currentDate.toLocaleDateString('en-GB', options);
}

// Function to update the main weather info
async function updateWeatherInfo(city) {
    const weatherData = await getFetchData('weather', city);
    if (!weatherData || weatherData.cod !== 200) {
        showDisplaySection(notfoundSection);
        return;
    }

    console.log(weatherData); // Ensure this line executes after fetching data
    const {
        name: country,
        main: { temp, humidity },
        weather: [{ id, main }],
        wind: { speed }
    } = weatherData;

    countryTxt.textContent = country;
    tempTxt.textContent = `${Math.round(temp)} ℃`;
    humidityValueTxt.textContent = `${humidity}%`;
    windValueTxt.textContent = `${speed} m/s`;
    conditionTxt.textContent = main;
    weatherSummaryImage.src = getWeatherIcon(id);

    // Display current date on the screen
    const formattedDate = getcurrentdate();
    currentDateTxt.forEach(element => {
        element.textContent = formattedDate;
    });

    await updateForecastInfo(city); // Corrected function call
    showDisplaySection(weatherinfo);
}

// Function to update the forecast info
async function updateForecastInfo(city) {
    const forecastData = await getFetchData('forecast', city);
    const todayDate = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    forecastContainer.innerHTML = ''; // Clear previous forecast items

    forecastData.list.forEach(forecast => {
        const forecastDate = forecast.dt_txt.split(' ')[0]; // Extract the date from the forecast
        // If the forecast date matches today
        if (forecastDate === todayDate) {
            updateForecastDisplay(forecast);
        }
    });
}

// Function to display each forecast item
function updateForecastDisplay(weatherData) {
    const {
        dt_txt: date,
        weather: [{ id }],
        main: { temp }
    } = weatherData;

    const forecastItem = `
    <div class="forecast-item">
        <h5 class="forecast-item-date regular-txt">${date.split(' ')[1]}</h5> <!-- Only display the time part of the date -->
        <img src="${getWeatherIcon(id)}" class="forecast-item-img">
        <h5 class="forecast-item-temp">${Math.round(temp)} ℃</h5>
    </div>`;

    forecastContainer.insertAdjacentHTML('beforeend', forecastItem); // Insert new forecast item
}

// Function to show the relevant section (current weather, search, or not found)
function showDisplaySection(section) {
    [weatherinfo, searchCitySection, notfoundSection].forEach(sec => sec.style.display = 'none');
    section.style.display = 'flex'; // Ensure the section to be shown is displayed correctly
}

// Ensure the image within notfoundSection is also visible
document.querySelectorAll('.not-found img').forEach(img => {
    img.style.display = 'block';
});
