let img = document.querySelector('img');
let button = document.querySelector('button');

button.addEventListener('click',()=>{
    fetch('https://dog.ceo/api/breeds/image/random') 
    .then(function(response){     
        return response.json()
    })
    .then((data)=>{
        console.log(data);
        
      

        img.src = data.message;

    })
})

//--------------------------------------------------------------------------------------


let form = document.querySelector("form");
let userInput = document.querySelector(".form-control");
let submit1 = document.querySelector(".btn btn-outline-primary");
let tem = document.querySelector('#temp');
let wind = document.querySelector('#wind');
let desc = document.querySelector('#desc');



form.addEventListener('submit',function(event){
    
    event.preventDefault();
    console.log(userInput.value);
    
    fetch(`https://goweather.herokuapp.com/weather/${userInput.value}`) 
    .then(function(y){     
        return y.json()
    })
    .then((x)=>{
        console.log(x);
        
        tem.innerText = x.temperature;
        wind.innerText = x.wind;
        desc.innerText = x.description;
        
    })

    userInput.value = "";
})