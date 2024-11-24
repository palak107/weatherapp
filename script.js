
const cityInput =document.querySelector('.city-input');
const searchButton = document.querySelector('.search-btn');
const notfoundSection = document.querySelector('.not-found');
const searchCity = document.querySelector('.search-city');
const weatherinfo = document.querySelector('.weather-info');
const countryTxt = document.querySelector(".country-txt")
const tempTxt =document.querySelector('.temp-txt');
const conditionTxt =document.querySelector('.condition-txt')
const humdidtiyValueTxt=document.querySelector('.humidity-value-txt')
const windValueTxt =document.querySelector('.wind-value-txt')
const weatherSummaryimage =document.querySelector('.weather-summary-image')
const currentDateTxt = document.querySelector('.current-date-txt')
const apiKey = "12a4c088f10fd5a199d58fe9767d1a36"

searchButton.addEventListener('click', ()=>{
  if (cityInput.value.trim()!=''){ 
    updateWeatherInfo(cityInput.value)
    cityInput.value=""
    cityInput.blur()
  }
})
cityInput.addEventListener('keydown',(event)=>{
  if (event.key == 'Enter' &&
    cityInput.value.trim() !=''
  ){
    updateWeatherInfo(cityInput.value)
    cityInput.value=""
    cityInput.blur()
  }
})
cityInput.addEventListener('keydown',(event)=>{
  if (event.key == 'Enter' &&
    cityInput.value.trim() !=''
  ){
  updateWeatherInfo(cityInput.value)
    cityInput.value=""
    cityInput.blur()
  }
})
 async function getFetchData(endPoint ,city){
const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`
const response = await fetch(apiUrl);
return response.json()
}
 async function updateWeatherInfo(city){
const weatherData = await getFetchData('weather',city)
if (weatherData.cod !=200){
  displaySelection(notfoundSection)
  return 
}
console.log(weatherData)
const {
  name: country,
  main:{temp, humdidtiy},
  weather:[{id,main}],
  wind:{speed}
}= weatherData
countryTxt.textContent=country
tempTxt.textContent=Math.round(temp) +'°C';
conditionTxt.textContent=main
humdidtiyValueTxt.textContent=humdidtiy + "%"
windValueTxt.textContent=speed + 'M/s'
weatherSummaryimage.src =``;
displaySelection(weatherinfo)
}
//  function showdisplaySelection(Section){
// [weatherinfo, searchCity,notfoundSection]
// .forEach(Section.style.displaySection="none")
//    Section.style.display="flex"
//  }