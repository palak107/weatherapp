// // // // const cityInput = document.querySelector('.cityinput');
// // // // const searchBtn = document.querySelector('.searchbtn');
// // // // const notfoundSection = document.querySelector('.not-found');
// // // // const weatherinfo = document.querySelector('.weather-info');
// // // // const searchCitySection = document.querySelector('.search-city');
// // // // const countryTxt = document.querySelector('.country-txt');
// // // // const tempTxt = document.querySelector('.temp-txt');
// // // // const cloudTxt = document.querySelector('.cloud-txt');
// // // // const humidityValueTxt = document.querySelector('.humidity-value-txt');
// // // // const windValueTxt = document.querySelector('.wind-value-txt');
// // // // const weatherSummaryImage = document.querySelector('.weather-summary-img');
// // // // const currentDateTxt = document.querySelectorAll('.current-date-txt');
// // // // const conditionTxt = document.querySelector('.condition-txt');
// // // // const forecastContainer = document.querySelector('.forecast-items-container'); // Ensure this exists in your HTML
// // // // const suggestionsContainer = document.querySelector('.suggestions-container');
// // // // const suggestionList =document.querySelector('.suggestios-list')
// // // // const apiKey = '12a4c088f10fd5a199d58fe9767d1a36';

// // // // // Event listeners for search button and Enter key
// // // // searchBtn.addEventListener('click', () => {
// // // //     if (cityInput.value.trim() != '') {
// // // //         updateWeatherInfo(cityInput.value);
// // // //         cityInput.value = "";
// // // //         cityInput.blur();
// // // //     }
// // // // });

// // // // cityInput.addEventListener('keydown', (event) => {
// // // //     if (event.key == 'Enter' && cityInput.value.trim() != '') {
// // // //         updateWeatherInfo(cityInput.value);
// // // //         cityInput.value = "";
// // // //         cityInput.blur();
// // // //     }
// // // // });



// // // // // Function to fetch data from OpenWeather API
// // // // async function getFetchData(endPoint, city) {
// // // //     const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;
// // // //     try {
// // // //         const response = await fetch(apiUrl);
// // // //         if (!response.ok) {
// // // //             throw new Error('Network response was not ok');
// // // //         }
// // // //         return response.json();
// // // //     } catch (error) {
// // // //         console.error('Error fetching data:', error);
// // // //         return null;
// // // //     }
// // // // }

// // // // // Function to get the appropriate weather icon based on the weather condition ID
// // // // function getWeatherIcon(id) {
// // // //     if (id <= 232) return 'assets/assets/weather/thunderstorm.svg';
// // // //     if (id <= 321) return 'assets/assets/weather/drizzle.svg';
// // // //     if (id <= 531) return 'assets/weather/rain.svg';
// // // //     if (id <= 622) return 'assets/assets/weather/snow.svg';
// // // //     if (id <= 781) return 'assets/assets/weather/rain.svg';
// // // //     if (id == 800) return 'assets/assets/weather/clear.svg';
// // // //     return 'assets/assets/weather/clouds.svg';
// // // // }

// // // // // Function to get the current date in the desired format
// // // // function getcurrentdate() {
// // // //     const currentDate = new Date();
// // // //     const options = {
// // // //         weekday: "short",
// // // //         day: '2-digit',
// // // //         month: 'short',
// // // //     };
// // // //     return currentDate.toLocaleDateString('en-GB', options);
// // // // }

// // // // // Function to update the main weather info
// // // // async function updateWeatherInfo(city) {
// // // //     const weatherData = await getFetchData('weather', city);
// // // //     if (!weatherData || weatherData.cod !== 200) {
// // // //         showDisplaySection(notfoundSection);
// // // //         return;
// // // //     }

// // // //     console.log(weatherData); // Ensure this line executes after fetching data
// // // //     const {
// // // //         name: country,
// // // //         main: { temp, humidity },
// // // //         weather: [{ id, main }],
// // // //         wind: { speed }
        
// // // //     } = weatherData;

// // // //     countryTxt.textContent = country;
// // // //     tempTxt.textContent = `${Math.round(temp)} ℃`;
// // // //     humidityValueTxt.textContent = `${humidity}%`;
// // // //     windValueTxt.textContent = `${speed} m/s`;
// // // //     conditionTxt.textContent = main;
// // // //     weatherSummaryImage.src = getWeatherIcon(id);

// // // //     // Display current date on the screen
// // // //     const formattedDate = getcurrentdate();
// // // //     currentDateTxt.forEach(element => {
// // // //         element.textContent = formattedDate;
// // // //     });

// // // //     await updateForecastInfo(city); // Corrected function call
// // // //     showDisplaySection(weatherinfo);
// // // // }

// // // // // Function to update the forecast info
// // // // async function updateForecastInfo(city) {
// // // //     const forecastData = await getFetchData('forecast', city);
// // // //     const todayDate = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
// // // //     forecastContainer.innerHTML = ''; // Clear previous forecast items

// // // //     forecastData.list.forEach(forecast => {
// // // //         const forecastDate = forecast.dt_txt.split(' ')[0]; // Extract the date from the forecast
// // // //         // If the forecast date matches today
// // // //         if (forecastDate === todayDate) {
// // // //             updateForecastDisplay(forecast);
// // // //         }
// // // //     });
// // // // }

// // // // // Function to display each forecast item
// // // // function updateForecastDisplay(weatherData) {
// // // //     const {
// // // //         dt_txt: date,
// // // //         weather: [{ id }],
// // // //         main: { temp }
// // // //     } = weatherData;

// // // //     // const dateTaken =new Date(date)
// // // //     // const dateOption={
// // // //     //     day:'2-digit',
// // // //     //     month:'short'
// // // //     // }
// // // //     const forecastTime = new Date(date); const timeOptions = { hour: '2-digit', minute: '2-digit' };
// // // //      const timeResult = forecastTime.toLocaleTimeString('en-US',timeOptions)
// // // //     // const dateResult=dateTaken.toLocaleDateString('en-US')
// // // //     const forecastItem = `
// // // //     <div class="forecast-item">
// // // //         <h5 class="forecast-item-date regular-txt">${dateResult}</h5> <!-- Only display the time part of the date -->
// // // //         <img src="${getWeatherIcon(id)}" class="forecast-item-img">
// // // //         <h5 class="forecast-item-temp">${Math.round(temp)} ℃</h5>
// // // //     </div>
// // // //     <div class="forecast-item">
// // // //         <h5 class="forecast-item-date regular-txt">${dateResult}</h5> <!-- Only display the time part of the date -->
// // // //         <img src="${getWeatherIcon(id)}" class="forecast-item-img">
// // // //         <h5 class="forecast-item-temp">${Math.round(temp)} ℃</h5>
// // // //     </div>
// // // //     <div class="forecast-item">
// // // //         <h5 class="forecast-item-date regular-txt">${dateResult}</h5> <!-- Only display the time part of the date -->
// // // //         <img src="${getWeatherIcon(id)}" class="forecast-item-img">
// // // //         <h5 class="forecast-item-temp">${Math.round(temp)} ℃</h5>
// // // //     </div>
// // // //     <div class="forecast-item">
// // // //         <h5 class="forecast-item-date regular-txt">${dateResult}</h5> <!-- Only display the time part of the date -->
// // // //         <img src="${getWeatherIcon(id)}" class="forecast-item-img">
// // // //         <h5 class="forecast-item-temp">${Math.round(temp)} ℃</h5>
// // // //     </div>
// // // //       `;

// // // //     forecastContainer.insertAdjacentHTML('beforeend', forecastItem); // Insert new forecast item
// // // // }

// // // // // Function to show the relevant section (current weather, search, or not found)
// // // // function showDisplaySection(section) {
// // // //     [weatherinfo, searchCitySection, notfoundSection].forEach(sec => sec.style.display = 'none');
// // // //     section.style.display = 'flex'; // Ensure the section to be shown is displayed correctly
// // // // }

// // // // // Ensure the image within notfoundSection is also visible
// // // // document.querySelectorAll('.not-found img').forEach(img => {
// // // //     img.style.display = 'block';


// // // // });



// // // // // Function to display city suggestions
// // // // function displayCitySuggestions(suggestions) {
// // // //     const suggestionsList = document.querySelector('.suggestions-list'); // Correctly select the suggestions list
// // // //     suggestionsList.innerHTML = ''; // Clear previous suggestions

// // // //     suggestions.forEach(suggestion => {
// // // //         const listItem = document.createElement('li');
// // // //         listItem.textContent = `${suggestion.name}, ${suggestion.sys.country}`;
// // // //         listItem.addEventListener('click', () => {
// // // //             cityInput.value = listItem.textContent; // Set the input field with the clicked suggestion
// // // //             updateWeatherInfo(suggestion.name); // Fetch weather for the selected city
// // // //             hideCitySuggestions(); // Hide suggestions after selection
// // // //         });
// // // //         suggestionsList.appendChild(listItem); // Append each suggestion to the list
// // // //     });

// // // //     suggestionsContainer.style.display = 'block'; // Show suggestions container
// // // // }

// // // // // Function to fetch city suggestions
// // // // async function fetchCitySuggestions(query) {
// // // //     const apiUrl = `https://api.openweathermap.org/data/2.5/find?q=${query}&appid=${apiKey}&units=metric&cnt=5`; // Fetch up to 5 suggestions
// // // //     const response = await fetch(apiUrl);
// // // //     const data = await response.json();

// // // //     if (data.list && data.list.length > 0) {
// // // //         displayCitySuggestions(data.list); // Display suggestions if found
// // // //     } else {
// // // //         hideCitySuggestions(); // Hide suggestions if no results
// // // //     }
// // // // }

// // // // // Function to hide city suggestions
// // // // function hideCitySuggestions() {
// // // //     suggestionsContainer.style.display = 'none'; // Hide suggestions container when there's no suggestion or after selection
// // // // }

// // // // // Event listener for the city input field to trigger suggestions
// // // // cityInput.addEventListener('input', (event) => {
// // // //     const query = cityInput.value.trim();
// // // //     if (query.length > 0) {
// // // //         fetchCitySuggestions(query); // Fetch city suggestions if input is not empty
// // // //     } else {
// // // //         hideCitySuggestions(); // Hide suggestions if input is empty
// // // //     }
// // // // });





// // // const cityInput = document.querySelector('.cityinput');
// // // const searchBtn = document.querySelector('.searchbtn');
// // // const notfoundSection = document.querySelector('.not-found');
// // // const weatherinfo = document.querySelector('.weather-info');
// // // const searchCitySection = document.querySelector('.search-city');
// // // const countryTxt = document.querySelector('.country-txt');
// // // const tempTxt = document.querySelector('.temp-txt');
// // // const cloudTxt = document.querySelector('.cloud-txt');
// // // const humidityValueTxt = document.querySelector('.humidity-value-txt');
// // // const windValueTxt = document.querySelector('.wind-value-txt');
// // // const weatherSummaryImage = document.querySelector('.weather-summary-img');
// // // const currentDateTxt = document.querySelectorAll('.current-date-txt');
// // // const conditionTxt = document.querySelector('.condition-txt');
// // // const forecastContainer = document.querySelector('.forecast-items-container');
// // // const suggestionsContainer = document.querySelector('.suggestions-container');
// // // const suggestionList = document.querySelector('.suggestions-list');
// // // const apiKey = '12a4c088f10fd5a199d58fe9767d1a36';

// // // // Event listeners for search button and Enter key
// // // searchBtn.addEventListener('click', () => {
// // //     if (cityInput.value.trim() != '') {
// // //         updateWeatherInfo(cityInput.value);
// // //         cityInput.value = "";
// // //         cityInput.blur();
// // //     }
// // // });

// // // cityInput.addEventListener('keydown', (event) => {
// // //     if (event.key == 'Enter' && cityInput.value.trim() != '') {
// // //         updateWeatherInfo(cityInput.value);
// // //         cityInput.value = "";
// // //         cityInput.blur();
// // //     }
// // // });

// // // // Function to fetch data from OpenWeather API
// // // async function getFetchData(endPoint, city) {
// // //     const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;
// // //     try {
// // //         const response = await fetch(apiUrl);
// // //         if (!response.ok) {
// // //             throw new Error('Network response was not ok');
// // //         }
// // //         return response.json();
// // //     } catch (error) {
// // //         console.error('Error fetching data:', error);
// // //         return null;
// // //     }
// // // }

// // // // Function to get the appropriate weather icon based on the weather condition ID
// // // function getWeatherIcon(id) {
// // //     if (id <= 232) return 'assets/assets/weather/thunderstorm.svg';
// // //     if (id <= 321) return 'assets/assets/weather/drizzle.svg';
// // //     if (id <= 531) return 'assets/weather/rain.svg';
// // //     if (id <= 622) return 'assets/assets/weather/snow.svg';
// // //     if (id <= 781) return 'assets/assets/weather/rain.svg';
// // //     if (id == 800) return 'assets/assets/weather/clear.svg';
// // //     return 'assets/assets/weather/clouds.svg';
// // // }

// // // // Function to get the current date in the desired format
// // // function getcurrentdate() {
// // //     const currentDate = new Date();
// // //     const options = {
// // //         weekday: "short",
// // //         day: '2-digit',
// // //         month: 'short',
// // //     };
// // //     return currentDate.toLocaleDateString('en-GB', options);
// // // }

// // // // Function to update the main weather info
// // // async function updateWeatherInfo(city) {
// // //     const weatherData = await getFetchData('weather', city);
// // //     if (!weatherData || weatherData.cod !== 200) {
// // //         showDisplaySection(notfoundSection);
// // //         return;
// // //     }

// // //     const {
// // //         name: country,
// // //         main: { temp, humidity },
// // //         weather: [{ id, main }],
// // //         wind: { speed }
// // //     } = weatherData;

// // //     countryTxt.textContent = country;
// // //     tempTxt.textContent = `${Math.round(temp)} ℃`;
// // //     humidityValueTxt.textContent = `${humidity}%`;
// // //     windValueTxt.textContent = `${speed} m/s`;
// // //     conditionTxt.textContent = main;
// // //     weatherSummaryImage.src = getWeatherIcon(id);

// // //     // Display current date on the screen
// // //     const formattedDate = getcurrentdate();
// // //     currentDateTxt.forEach(element => {
// // //         element.textContent = formattedDate;
// // //     });

// // //     await updateForecastInfo(city);
// // //     showDisplaySection(weatherinfo);
// // // }

// // // //function for cureent time 
// // // function getCurrenttime(){
// // //     const  currentDate = new Date();
// // //     const options = {
// // //         hour : "2-digit",
// // //         minute : "2-digit",
// // //         hour12: false //f or 24 hour  format
// // //     };
// // //     return currentDate.toLocaleTimeString('en-GB')
// // // }

// // // // Function to update the forecast info
// // // async function updateForecastInfo(city) {
// // //     const forecastData = await getFetchData('forecast', city);
// // //     const todayDate = new Date().toISOString().split('T')[0];
// // //     forecastContainer.innerHTML = '';

// // //     forecastData.list.forEach(forecast => {
// // //         const forecastDate = forecast.dt_txt.split(' ')[0];
// // //         updateForecastDisplay(forecast); // Update forecast display without filtering for today only
// // //     });
// // // }

// // // // Function to display each forecast item
// // // function updateForecastDisplay(weatherData) {
// // //     const {
// // //         dt_txt: date,
// // //         weather: [{ id }],
// // //         main: { temp }
// // //     } = weatherData;

// // //     const forecastTime = new Date(date);
// // //     const timeOptions = { hour: '2-digit', minute: '2-digit' };
// // //     const timeResult = forecastTime.toLocaleTimeString('en-US', timeOptions);

// // //     const forecastItem = `
// // //     <div class="forecast-item">
// // //         <h5 class="forecast-item-time regular-txt">${timeResult}</h5>
// // //         <img src="${getWeatherIcon(id)}" class="forecast-item-img">
// // //         <h5 class="forecast-item-temp">${Math.round(temp)} ℃</h5>
// // //     </div>`;

// // //     forecastContainer.insertAdjacentHTML('beforeend', forecastItem);
// // // }

// // // // Function to show the relevant section (current weather, search, or not found)
// // // function showDisplaySection(section) {
// // //     [weatherinfo, searchCitySection, notfoundSection].forEach(sec => sec.style.display = 'none');
// // //     section.style.display = 'flex';
// // // }

// // // // Ensure the image within notfoundSection is also visible
// // // document.querySelectorAll('.not-found img').forEach(img => {
// // //     img.style.display = 'block';
// // // });

// // // // Function to display city suggestions
// // // function displayCitySuggestions(suggestions) {
// // //     const suggestionsList = document.querySelector('.suggestions-list');
// // //     suggestionsList.innerHTML = '';

// // //     suggestions.forEach(suggestion => {
// // //         const listItem = document.createElement('li');
// // //         listItem.textContent = `${suggestion.name}, ${suggestion.sys.country}`;
// // //         listItem.addEventListener('click', () => {
// // //             cityInput.value = listItem.textContent;
// // //             updateWeatherInfo(suggestion.name);
// // //             hideCitySuggestions();
// // //         });
// // //         suggestionsList.appendChild(listItem);
// // //     });

// // //     suggestionsContainer.style.display = 'block';
// // // }

// // // // Function to fetch city suggestions
// // // async function fetchCitySuggestions(query) {
// // //     const apiUrl = `https://api.openweathermap.org/data/2.5/find?q=${query}&appid=${apiKey}&units=metric&cnt=5`;
// // //     const response = await fetch(apiUrl);
// // //     const data = await response.json();

// // //     if (data.list && data.list.length > 0) {
// // //         displayCitySuggestions(data.list);
// // //     } else {
// // //         hideCitySuggestions();
// // //     }
// // // }

// // // // Function to hide city suggestions
// // // function hideCitySuggestions() {
// // //     suggestionsContainer.style.display = 'none';
// // // }

// // // // Event listener for the city input field to trigger suggestions
// // // cityInput.addEventListener('input', (event) => {
// // //     const query = cityInput.value.trim();
// // //     if (query.length > 0) {
// // //         fetchCitySuggestions(query);
// // //     } else {
// // //         hideCitySuggestions();
// // //     }
// // // });
// // const cityInput = document.querySelector('.cityinput');
// // const searchBtn = document.querySelector('.searchbtn');
// // const notfoundSection = document.querySelector('.not-found');
// // const weatherinfo = document.querySelector('.weather-info');
// // const searchCitySection = document.querySelector('.search-city');
// // const countryTxt = document.querySelector('.country-txt');
// // const tempTxt = document.querySelector('.temp-txt');
// // const cloudTxt = document.querySelector('.cloud-txt');
// // const humidityValueTxt = document.querySelector('.humidity-value-txt');
// // const windValueTxt = document.querySelector('.wind-value-txt');
// // const weatherSummaryImage = document.querySelector('.weather-summary-img');
// // const currentDateTxt = document.querySelectorAll('.current-date-txt');
// // const conditionTxt = document.querySelector('.condition-txt');
// // const forecastContainer = document.querySelector('.forecast-items-container');
// // const suggestionsContainer = document.querySelector('.suggestions-container');
// // const suggestionList = document.querySelector('.suggestions-list');
// // const apiKey = '12a4c088f10fd5a199d58fe9767d1a36';

// // // Event listeners for search button and Enter key
// // searchBtn.addEventListener('click', () => {
// //     if (cityInput.value.trim() != '') {
// //         updateWeatherInfo(cityInput.value);
// //         cityInput.value = "";
// //         cityInput.blur();
// //     }
// // });

// // cityInput.addEventListener('keydown', (event) => {
// //     if (event.key == 'Enter' && cityInput.value.trim() != '') {
// //         updateWeatherInfo(cityInput.value);
// //         cityInput.value = "";
// //         cityInput.blur();
// //     }
// // });

// // // Function to fetch data from OpenWeather API
// // async function getFetchData(endPoint, city) {
// //     const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;
// //     try {
// //         const response = await fetch(apiUrl);
// //         if (!response.ok) {
// //             throw new Error('Network response was not ok');
// //         }
// //         return response.json();
// //     } catch (error) {
// //         console.error('Error fetching data:', error);
// //         return null;
// //     }
// // }

// // // Function to get the appropriate weather icon based on the weather condition ID
// // function getWeatherIcon(id) {
// //     if (id <= 232) return 'assets/assets/weather/thunderstorm.svg';
// //     if (id <= 321) return 'assets/assets/weather/drizzle.svg';
// //     if (id <= 531) return 'assets/weather/rain.svg';
// //     if (id <= 622) return 'assets/assets/weather/snow.svg';
// //     if (id <= 781) return 'assets/assets/weather/rain.svg';
// //     if (id == 800) return 'assets/assets/weather/clear.svg';
// //     return 'assets/assets/weather/clouds.svg';
// // }

// // // Function to get the current date in the desired format
// // function getcurrentdate() {
// //     const currentDate = new Date();
// //     const options = {
// //         weekday: "short",
// //         day: '2-digit',
// //         month: 'short',
// //     };
// //     return currentDate.toLocaleDateString('en-GB', options);
// // }

// // // Function to update the main weather info
// // async function updateWeatherInfo(city) {
// //     const weatherData = await getFetchData('weather', city);
// //     if (!weatherData || weatherData.cod !== 200) {
// //         showDisplaySection(notfoundSection);
// //         return;
// //     }

// //     const {
// //         name: country,
// //         main: { temp, humidity },
// //         weather: [{ id, main }],
// //         wind: { speed }
// //     } = weatherData;

// //     countryTxt.textContent = country;
// //     tempTxt.textContent = `${Math.round(temp)} ℃`;
// //     humidityValueTxt.textContent = `${humidity}%`;
// //     windValueTxt.textContent = `${speed} m/s`;
// //     conditionTxt.textContent = main;
// //     weatherSummaryImage.src = getWeatherIcon(id);

// //     // Display current date on the screen
// //     const formattedDate = getcurrentdate();
// //     const formattedTime = getCurrenttime();
// //     currentDateTxt.forEach(element => {
// //         element.textContent = `${formattedDate}, ${formattedTime}`;
// //     });

// //     await updateForecastInfo(city);
// //     showDisplaySection(weatherinfo);
// // }

// // // Function for current time
// // function getCurrenttime() {
// //     const currentDate = new Date();
// //     const options = {
// //         hour: "2-digit",
// //         minute: "2-digit",
// //         hour12: false // 24-hour format
// //     };
// //     return currentDate.toLocaleTimeString('en-GB', options);
// // }

// // // Function to update the forecast info
// // async function updateForecastInfo(city) {
// //     const forecastData = await getFetchData('forecast', city);
// //     const currentDate = new Date();
// //     const currentHour = currentDate.getHours();

// //     forecastContainer.innerHTML = '';

// //     // Filter the forecast data to show only the next forecast items starting from the current time
// //     const filteredForecast = forecastData.list.filter(forecast => {
// //         const forecastTime = new Date(forecast.dt_txt);
// //         return forecastTime.getHours() >= currentHour; // Show only future forecast items
// //     });

// //     // Update the forecast display with each hourly forecast
// //     filteredForecast.forEach((forecast, index) => {
// //         const forecastTime = new Date(forecast.dt_txt);
// //         forecastTime.setHours(currentHour + index); // Set the hour incrementally for each forecast item
// //         updateForecastDisplay(forecast, forecastTime); // Pass the updated time to the display function
// //     });
// // }

// // // Function to display each forecast item
// // function updateForecastDisplay(weatherData, forecastTime) {
// //     const {
// //         weather: [{ id }],
// //         main: { temp }
// //     } = weatherData;

// //     const timeOptions = { hour: '2-digit', minute: '2-digit' };
// //     const timeResult = forecastTime.toLocaleTimeString('en-US', timeOptions);

// //     const forecastItem = `
// //     <div class="forecast-item">
// //         <h5 class="forecast-item-time regular-txt">${timeResult}</h5>
// //         <img src="${getWeatherIcon(id)}" class="forecast-item-img">
// //         <h5 class="forecast-item-temp">${Math.round(temp)} ℃</h5>
// //     </div>`;

// //     forecastContainer.insertAdjacentHTML('beforeend', forecastItem);
// // }

// // // Function to show the relevant section (current weather, search, or not found)
// // function showDisplaySection(section) {
// //     [weatherinfo, searchCitySection, notfoundSection].forEach(sec => sec.style.display = 'none');
// //     section.style.display = 'flex';
// // }

// // // Ensure the image within notfoundSection is also visible
// // document.querySelectorAll('.not-found img').forEach(img => {
// //     img.style.display = 'block';
// // });

// // // Function to display city suggestions
// // function displayCitySuggestions(suggestions) {
// //     const suggestionsList = document.querySelector('.suggestions-list');
// //     suggestionsList.innerHTML = '';

// //     suggestions.forEach(suggestion => {
// //         const listItem = document.createElement('li');
// //         listItem.textContent = `${suggestion.name}, ${suggestion.sys.country}`;
// //         listItem.addEventListener('click', () => {
// //             cityInput.value = listItem.textContent;
// //             updateWeatherInfo(suggestion.name);
// //             hideCitySuggestions();
// //         });
// //         suggestionsList.appendChild(listItem);
// //     });

// //     suggestionsContainer.style.display = 'block';
// // }

// // // Function to fetch city suggestions
// // async function fetchCitySuggestions(query) {
// //     const apiUrl = `https://api.openweathermap.org/data/2.5/find?q=${query}&appid=${apiKey}&units=metric&cnt=5`;
// //     const response = await fetch(apiUrl);
// //     const data = await response.json();

// //     if (data.list && data.list.length > 0) {
// //         displayCitySuggestions(data.list);
// //     } else {
// //         hideCitySuggestions();
// //     }
// // }

// // // Function to hide city suggestions
// // function hideCitySuggestions() {
// //     suggestionsContainer.style.display = 'none';
// // }

// // // Event listener for the city input field to trigger suggestions
// // cityInput.addEventListener('input', (event) => {
// //     const query = cityInput.value.trim();
// //     if (query.length > 0) {
// //         fetchCitySuggestions(query);
// //     } else {
// //         hideCitySuggestions();
// //     }
// // });
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
// const forecastContainer = document.querySelector('.forecast-items-container');
// const suggestionsContainer = document.querySelector('.suggestions-container');
// const suggestionList = document.querySelector('.suggestions-list');
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
// // Function to format the Unix timestamp to a human-readable time (HH:MM)
// function formatTime(timestamp) {
//     const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
//     const hours = date.getHours().toString().padStart(2, '0');
//     const minutes = date.getMinutes().toString().padStart(2, '0');
//     return `${hours}:${minutes}`;
// }
//     const {
//         name: country,
//         main: { temp, humidity },
//         weather: [{ id, main }],
//         wind: { speed },
//         sys: {sunrise,sunset}
//     } = weatherData;

//     countryTxt.textContent = country;
//     tempTxt.textContent = `${Math.round(temp)} ℃`;
//     humidityValueTxt.textContent = `${humidity}%`;
//     windValueTxt.textContent = `${speed} m/s`;
//     conditionTxt.textContent = main;
//     weatherSummaryImage.src = getWeatherIcon(id);

//     const sunrisetime =formatTime(sunrise);
//     const sunsetTime = formatTime(sunset);
    
//     // Display current date and time on the screen
//     const formattedDate = getcurrentdate();
//     const formattedTime = getCurrenttime();
//     currentDateTxt.forEach(element => {
//         element.textContent = `${formattedDate}, ${formattedTime}`;
//     });

//     await updateForecastInfo(city);
//     showDisplaySection(weatherinfo);
// }

// // Function to get current time
// function getCurrenttime() {
//     const currentDate = new Date();
//     const options = {
//         hour: "2-digit",
//         minute: "2-digit",
//         hour12: false // For 24-hour format
//     };
//     return currentDate.toLocaleTimeString('en-GB', options);
// }

// // Function to update the forecast info
// async function updateForecastInfo(city) {
//     const forecastData = await getFetchData('forecast', city);
//     const currentDate = new Date().toISOString().split('T')[0];
//     const currentHour = new Date().getHours();

//     forecastContainer.innerHTML = '';

//     // Filter forecast data to show from the current time onwards
//     const filteredForecast = forecastData.list.filter(forecast => {
//         const forecastTime = new Date(forecast.dt_txt);
//         return forecastTime.getHours() >= currentHour;
//     });

//     // Display forecast data incrementing the hours by 1
//     filteredForecast.forEach((forecast, index) => {
//         const forecastTime = new Date(forecast.dt_txt);
//         forecastTime.setHours(currentHour + index); // Increment hour for each forecast item
//         updateForecastDisplay(forecast, forecastTime); // Pass the updated time to the display function
//     });
// }

// // Function to display each forecast item
// function updateForecastDisplay(weatherData, forecastTime) {
//     const {
//         weather: [{ id }],
//         main: { temp }
//     } = weatherData;

//     const timeOptions = { hour: '2-digit', minute: '2-digit' };
//     const timeResult = forecastTime.toLocaleTimeString('en-US', timeOptions);

//     const forecastItem = `
//     <div class="forecast-item">
//         <h5 class="forecast-item-time regular-txt">${timeResult}</h5>
//         <img src="${getWeatherIcon(id)}" class="forecast-item-img">
//         <h5 class="forecast-item-temp">${Math.round(temp)} ℃</h5>
//     </div>`;

//     forecastContainer.insertAdjacentHTML('beforeend', forecastItem);
// }

// // Function to show the relevant section (current weather, search, or not found)
// function showDisplaySection(section) {
//     [weatherinfo, searchCitySection, notfoundSection].forEach(sec => sec.style.display = 'none');
//     section.style.display = 'flex';
// }

// // Ensure the image within notfoundSection is also visible
// document.querySelectorAll('.not-found img').forEach(img => {
//     img.style.display = 'block';
// });

// // Function to display city suggestions
// function displayCitySuggestions(suggestions) {
//     const suggestionsList = document.querySelector('.suggestions-list');
//     suggestionsList.innerHTML = '';

//     suggestions.forEach(suggestion => {
//         const listItem = document.createElement('li');
//         listItem.textContent = `${suggestion.name}, ${suggestion.sys.country}`;
//         listItem.addEventListener('click', () => {
//             cityInput.value = listItem.textContent;
//             updateWeatherInfo(suggestion.name);
//             hideCitySuggestions();
//         });
//         suggestionsList.appendChild(listItem);
//     });

//     suggestionsContainer.style.display = 'block';
// }

// // Function to fetch city suggestions
// async function fetchCitySuggestions(query) {
//     if (query.length < 3) {
//         hideCitySuggestions(); // Hide suggestions if query is too short
//         return; // Don't make the API call if the query is too short
//     }

//     const apiUrl = `https://api.openweathermap.org/data/2.5/find?q=${query}&appid=${apiKey}&units=metric&cnt=5`;

//     try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();

//         // Check if the response is valid
//         if (data.cod === "404" || !data.list || data.list.length === 0) {
//             hideCitySuggestions(); // No results, hide the suggestions
//             return;
//         }

//         // Display the suggestions
//         displayCitySuggestions(data.list);
//     } catch (error) {
//         console.error('Error fetching city suggestions:', error);
//         hideCitySuggestions(); // In case of error, hide suggestions
//     }
// }

// // Function to hide city suggestions
// function hideCitySuggestions() {
//     suggestionsContainer.style.display = 'none';
// }

// // Event listener for the city input field to trigger suggestions
// cityInput.addEventListener('input', (event) => {
//     const query = cityInput.value.trim();
//     if (query.length > 0) {
//         fetchCitySuggestions(query);
//     } else {
//         hideCitySuggestions();
//     }
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
const sunriseText = document.querySelector('.sunrise-time');
const sunsetText = document.querySelector('.sunset-time');
const forecastContainer = document.querySelector('.forecast-items-container');
const suggestionsContainer = document.querySelector('.suggestions-container');
const suggestionList = document.querySelector('.suggestions-list');
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
    } else if (cityInput.value.trim() != '') {
        // Fetch city suggestions when user types
        fetchCitySuggestions(cityInput.value);
    } else {
        hideCitySuggestions();
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

    const {
        name: country,
        main: { temp, humidity },
        weather: [{ id, main }],
        wind: { speed },
        sys: { sunrise, sunset }
    } = weatherData;

    // Format sunrise and sunset times
    const sunrisetime = formatTime(sunrise);
    const sunsetTime = formatTime(sunset);

    countryTxt.textContent = country;
    tempTxt.textContent = `${Math.round(temp)} ℃`;
    humidityValueTxt.textContent = `${humidity}%`;
    windValueTxt.textContent = `${speed} m/s`;
    conditionTxt.textContent = main;
    weatherSummaryImage.src = getWeatherIcon(id);
    sunriseText.textContent = `Sunrise: ${sunrisetime}`;
    sunsetText.textContent = `Sunset: ${sunsetTime}`;

    // Display current date and time
    const formattedDate = getcurrentdate();
    const formattedTime = getCurrenttime();
    currentDateTxt.forEach(element => {
        element.textContent = `${formattedDate}, ${formattedTime}`;
    });

    await updateForecastInfo(city);
    showDisplaySection(weatherinfo);
}

// Function to format the Unix timestamp to a human-readable time (HH:MM)
function formatTime(timestamp) {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

// Function to get current time
function getCurrenttime() {
    const currentDate = new Date();
    const options = {
        hour: "2-digit",
        minute: "2-digit",
        hpur12:false
        
    };
    return currentDate.toLocaleTimeString('en-GB', options);
}

// Function to update the forecast info
async function updateForecastInfo(city) {
    const forecastData = await getFetchData('forecast', city);
    const currentDate = new Date().toISOString().split('T')[0];
    const currentHour = new Date().getHours();

    forecastContainer.innerHTML = '';

    // Filter forecast data to show from the current time onwards
    const filteredForecast = forecastData.list.filter(forecast => {
        const forecastTime = new Date(forecast.dt_txt);
        return forecastTime.getHours() >= currentHour;
    });

    // Display forecast data incrementing the hours by 1
    filteredForecast.forEach((forecast, index) => {
        const forecastTime = new Date(forecast.dt_txt);
        forecastTime.setHours(currentHour + index); // Increment hour for each forecast item
        updateForecastDisplay(forecast, forecastTime); // Pass the updated time to the display function
    });
}

// Function to display each forecast item
function updateForecastDisplay(weatherData, forecastTime) {
    const {
        weather: [{ id }],
        main: { temp }
    } = weatherData;

    const timeOptions = { hour: '2-digit', minute: '2-digit' };
    const timeResult = forecastTime.toLocaleTimeString('en-US', timeOptions);

    const forecastItem = `
    <div class="forecast-item">
        <h5 class="forecast-item-time regular-txt">${timeResult}</h5>
        <img src="${getWeatherIcon(id)}" class="forecast-item-img">
        <h5 class="forecast-item-temp">${Math.round(temp)} ℃</h5>
    </div>`;

    forecastContainer.insertAdjacentHTML('beforeend', forecastItem);
}

// Function to show the relevant section (current weather, search, or not found)
function showDisplaySection(section) {
    [weatherinfo, searchCitySection, notfoundSection].forEach(sec => sec.style.display = 'none');
    section.style.display = 'flex';
}

// Ensure the image within notfoundSection is also visible
document.querySelectorAll('.not-found img').forEach(img => {
    img.style.display = 'block';
});

// Function to display city suggestions
function displayCitySuggestions(suggestions) {
    const suggestionsList = document.querySelector('.suggestions-list');
    suggestionsList.innerHTML = '';

    suggestions.forEach(suggestion => {
        const listItem = document.createElement('li');
        listItem.textContent = `${suggestion.name}, ${suggestion.sys.country}`;
        listItem.addEventListener('click', () => {
            cityInput.value = listItem.textContent;
            updateWeatherInfo(suggestion.name);
            hideCitySuggestions();
        });
        suggestionsList.appendChild(listItem);
    });

    suggestionsContainer.style.display = 'block';
}

// Function to fetch city suggestions
async function fetchCitySuggestions(query) {
    if (query.length < 3) {
        hideCitySuggestions(); // Hide suggestions if query is too short
        return; // Don't make the API call if the query is too short
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/find?q=${query}&appid=${apiKey}&units=metric&cnt=5`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Check if the response is valid
        if (data.cod === "404" || !data.list || data.list.length === 0) {
            hideCitySuggestions(); // No results, hide the suggestions
            return;
        }

        // Display the suggestions
        displayCitySuggestions(data.list);
    } catch (error) {
        console.error('Error fetching city suggestions:', error);
        hideCitySuggestions(); // In case of error, hide suggestions
    }
}

// Function to hide city suggestions
function hideCitySuggestions() {
    suggestionsContainer.style.display = 'none';
}
function getLocationWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            updateWeatherInfoByCoords(latitude, longitude);
        }, () => {
            alert('Geolocation is not supported or denied by the user.');
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}

async function updateWeatherInfoByCoords(lat, lon) {
    const weatherData = await getFetchData('weather', `${lat},${lon}`);
    if (weatherData && weatherData.cod === 200) {
        updateWeatherInfoDisplay(weatherData);
    }
}
