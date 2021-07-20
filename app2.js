const express = require("express");
const https = require("https");
const bodyparsar = require("body-parser");


const app = express();
app.use(bodyparsar.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    res.sendFile(__dirname+"/index.html")
    var city=req.body.cityname

console.log(city)
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=9c689905446ba65a7d5046fdbf67c444"

    https.get(url, function (response) {

console.log(response.statusCode)
        response.on("data", function (data) {
            const weatherdata = JSON.parse(data)
            const t=weatherdata.main.temp
            const weatherdiscription=weatherdata.weather[0].description
            const icon=weatherdata.weather[0].icon
            const image="http://openweathermap.org/img/wn/"+icon+"@2x.png"
            console.log(t)
            res.write("<p> the weather is "+weatherdiscription+"<p>")
            res.write("<p>temperature in<b> "+ city+" </b> is" +(t-273)+"<p>")
            res.write("<img src="+ image+">");



    });

   

});
  

});



// app.post("/",function(req,res){
    

// var city=req.body.cityname

// console.log(city)
//     const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=9c689905446ba65a7d5046fdbf67c444"

//     https.get(url, function (response) {

// console.log(response.statusCode)
//         response.on("data", function (data) {
//             const weatherdata = JSON.parse(data)
//             const t=weatherdata.main.temp
//             const weatherdiscription=weatherdata.weather[0].description
//             const icon=weatherdata.weather[0].icon
//             const image="http://openweathermap.org/img/wn/"+icon+"@2x.png"
//             console.log(t)
//             res.write("<p> the weather is "+weatherdiscription+"<p>")
//             res.write("<p>temperature in<b> "+ city+" </b> is" +(t-273)+"<p>")
//             res.write("<img src="+ image+">");



//     });

   

// });





// })



app.listen(3000, function () {
    console.log("server is running");
})













// const search_term = document.getElementById('search_q')
// const search_btn = document.getElementById('search-btn')


// // api https://pokeapi.co/docs/v2#pokemon
// const getPokemonData = async term => {
//     document.getElementById('show_error').classList.remove('show')
//     document.getElementById('show_error').classList.add('hidden')
        
//     const url = `https://pokeapi.co/api/v2/pokemon/${term}`
//     const response = await fetch(url)

//     if(response.status == 404 || response.statusText == 'Not Found'){
//         document.getElementById('show_error').classList.add('show')
//         document.getElementById('show_error').classList.remove('hidden')
//         return
//     }

//     const pokemon = await response.json()
//     debugger

//     // update ui with data 
//     document.getElementById('update_img').setAttribute('src', pokemon.sprites.other.dream_world.front_default)
//     document.getElementById('update_name').innerHTML = pokemon.name
//     document.getElementById('update_candy_title').innerHTML = `${pokemon.name} Candy`
//     document.getElementById('update_hp').innerHTML = `HP ${Math.floor((Math.random() * pokemon.stats[0].base_stat) + 1)}/${pokemon.stats[0].base_stat}`
//     document.getElementById('update_cp').innerHTML = `XP ${pokemon.base_experience}`
//     document.getElementById('update_type').innerHTML = `${pokemon.types[0].type.name} / ${pokemon.types[1].type.name}`
//     document.getElementById('update_weight').innerHTML = `${pokemon.weight}kg`
//     document.getElementById('update_height').innerHTML = `0.${pokemon.height}m`
//     document.getElementById('update_stardust').innerHTML = Math.floor((Math.random() * 10000) + 1)
//     document.getElementById('update_candy').innerHTML = Math.floor((Math.random() * 200) + 1)

// }

// search_btn.addEventListener('click', () => getPokemonData(search_term.value))
