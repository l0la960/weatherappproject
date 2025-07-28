let search = document.querySelector("#search")
let btn = document.querySelector(".btn")
 btn.addEventListener("click" , () => {
  let userlocation = search.value.trim()
  fetch(`https://api.weatherapi.com/v1/forecast.json?key=2acc17d201784043a6b101129252307&q=${userlocation}&days=1&aqi=no&alerts=no`)
.then ( (data) =>   data.json())
.then((info) => {
    console.log(info); 
  const display = document.getElementById("weather-display");
  
    const place = info.location.name;
    const temp = info.current.temp_c;
    const condition = info.current.condition.text;
    const country = info.location.country
    const icon = info.current.condition.icon


    display.innerHTML = `
      <p class="place"> ${userlocation}</p>
      <p class="country"> ${country}</p>
      <p class="temp">${temp}°C</p>
      <p class="condition"> ${condition}</p>
      <img src="${icon}">
      
    `;
      
  })

})

// inner html allows you to use html tags in java