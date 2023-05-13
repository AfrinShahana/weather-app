const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click' , function(){
// console.log('Hello')
 
const inputBtn = document.getElementById('input-btn').value;
// console.log(inputbtn)


// api
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputBtn+'&appid=5c3b2cb10a87dfdbf56d4d238a5c455f')
.then(response => response.json())
.then(data =>{
    console.log(data) 

    const cityName1 =data.name;
    const tem =data.main.temp;
 
    const temp1 = tem - 273.15;
    const description1 =data.weather[0].description;
    const humidity1 = data.main.humidity;
    const wind1 = data.wind.speed;

    document.getElementById('city2').innerHTML ="City Name : " + cityName1;
    document.getElementById('temp2').innerHTML ="Temperature : " + temp1.toFixed(2);
    document.getElementById('des2').innerHTML ="Description : " + description1;
    document.getElementById("wind2").innerHTML="Wind : " +  wind1 + " %";
    document.getElementById("humidity2").innerHTML="Humidity : " + humidity1 + " km/h";

    
})

.catch(res => alert("Please type right city name"))

})
