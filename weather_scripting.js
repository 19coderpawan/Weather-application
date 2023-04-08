// javascript code for the weather application.

//object variable to store the api info.
let weather={
    "apikeys":"c5ebeb791c1dc96d86814f729a340dbf",
    fetchWeather: function(city){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apikeys}`)
        .then(response=> response.json())
        .then(data=> this.displayWeather(data))       
    },
    displayWeather:(data)=>{
        const {name}= data; // one method is this way you can asscess the data of the dataobject.
        const {temp,humidity}=data.main;
        const {icon , description}=data.weather[0]; // with this syntax js will look at the data.weather object and extract the icon and description variable.
        const{speed}=data.wind;
        console.log(name,temp,humidity,icon,description,speed);
        // now its time to display the weather data in the page.

        document.querySelector(".city").innerHTML=`Weather in ${name}`;
        document.querySelector(".temperature").innerHTML=`${temp}°C`;
        document.querySelector(".description").innerHTML=description;
        document.querySelector(".humidity").innerHTML=`Humididy:${humidity}`;
        document.querySelector(".wind").innerHTML=`Wind speed:${speed} km/hr`
        document.querySelector("img").src=`http://openweathermap.org/img/wn/${icon}.png`
       document.body.style.backgroundImage=`url(https://source.unsplash.com/1600x900/?${name})`
       document.querySelector(".display").style.visibility="visible"
    },
    search:function(){
        this.fetchWeather(document.querySelector(".input_field").value)
    }

};

document.querySelector(".search_btn").addEventListener("click",()=>{
    weather.search();
})
document.querySelector(".input_field").addEventListener("keyup",(event)=>{
    if(event.key==="Enter"){
        weather.search();
    }
})


