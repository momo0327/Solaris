const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com';
const h1 = document.querySelector('.h1')
const h2 = document.querySelector('.h2')
const p = document.querySelector('p')
const circ = document.querySelector('.circ')
const distance = document.querySelector('.distance')
const maxTemp = document.querySelector('.maxTemp')
const minTemp = document.querySelector('.minTemp')
const moons = document.querySelector('.moons')
const section = document.querySelector('section')
const btn = document.querySelector('.btn')
let data;
let sol;
let merc;
let venus;
let jorden;
let mars;
let jupiter;
let saturnus;
let uranus;
let neptunus; 



async function getPlanets (){
    const response = await fetch(`${BASE_URL}/bodies`, {
        headers: {
            'x-zocom': 'solaris-vKkkQHqQboi7c6JF'
        }
    });
     data = await response.json();
     sol = data[0]
    

}


async function info(){
   await getPlanets();


   sol = data.bodies[0]
   merc = data.bodies[1]
   venus = data.bodies[2]
   jorden = data.bodies[3]
   mars = data.bodies[4]
   jupiter = data.bodies[5]
   saturnus = data.bodies[6]
   uranus = data.bodies[7]
   neptunus = data.bodies[8]

   console.log(jupiter)
}

info()

// vid click så visas det en alert som säger sol, vi ska ändra detta till en section
const userClick = document.querySelector('.sol').addEventListener('click', function(){
    h1.innerHTML = sol.name
    h2.innerHTML = sol.latinName
    p.innerHTML = sol.desc
    distance.innerHTML = `${sol.distance} km`
    circ.innerHTML = `${sol.circumference} km`
    maxTemp.innerHTML = `${sol.temp.day} C `
    minTemp.innerHTML = `${sol.temp.night} C `
    moons.innerHTML = sol.moons.join(', ')
    section.classList.toggle('hide') 
    
})

const userClick2 = document.querySelector('.merc').addEventListener('click', function(){
    h1.innerHTML = merc.name
    h2.innerHTML = merc.latinName
    p.innerHTML = merc.desc
    distance.innerHTML = `${merc.distance} km`
    circ.innerHTML =`${merc.circumference} km`
    maxTemp.innerHTML = `${merc.temp.day} C`
    minTemp.innerHTML = `${merc.temp.night} C`
    moons.innerHTML = merc.moons.join(', ')
    section.classList.toggle('hide') 
})


const userClick3 = document.querySelector('.venus').addEventListener('click', function(){
    h1.innerHTML = venus.name
    h2.innerHTML = venus.latinName
    p.innerHTML = venus.desc
    distance.innerHTML = `${venus.distance} km`
    circ.innerHTML = `${venus.circumference} km`
    maxTemp.innerHTML = `${venus.temp.day} C`
    minTemp.innerHTML = `${venus.temp.night} C`
    moons.innerHTML = venus.moons.join(', ')
    section.classList.toggle('hide') 

})


const userClick4 = document.querySelector('.jorden').addEventListener('click', function(){
    h1.innerHTML = jorden.name
    h2.innerHTML = jorden.latinName
    p.innerHTML = jorden.desc
    distance.innerHTML = `${jorden.distance} km`
    circ.innerHTML =  `${jorden.circumference} km`
    maxTemp.innerHTML = `${jorden.temp.day} C`
    minTemp.innerHTML = `${jorden.temp.night} C`
    moons.innerHTML = jorden.moons.join(', ')
    section.classList.toggle('hide') 

  
})

const userClick5 = document.querySelector('.mars').addEventListener('click', function(){
    h1.innerHTML = mars.name
    h2.innerHTML = mars.latinName
    p.innerHTML = mars.desc
    distance.innerHTML = `${mars.distance} km`
    circ.innerHTML = `${mars.circumference} km`
    maxTemp.innerHTML = `${mars.temp.day} C`
    minTemp.innerHTML = `${mars.temp.night} C`
    moons.innerHTML = mars.moons.join(', ')
    section.classList.toggle('hide') 

  
})

const userClick6 = document.querySelector('.jupiter').addEventListener('click', function(){
    h1.innerHTML = jupiter.name
    h2.innerHTML = jupiter.latinName
    p.innerHTML = jupiter.desc
    distance.innerHTML = `${jupiter.distance} km`
    circ.innerHTML = `${jupiter.circumference} km`
    maxTemp.innerHTML =  `${jupiter.temp.day} C`
    minTemp.innerHTML = `${jupiter.temp.night} C`
    moons.innerHTML = jupiter.moons.join(', ')
    section.classList.toggle('hide') 

  
})

const userClick7 = document.querySelector('.saturnus').addEventListener('click', function(){
    h1.innerHTML = saturnus.name
    h2.innerHTML = saturnus.latinName
    p.innerHTML = saturnus.desc
    distance.innerHTML = `${saturnus.distance} km`
    circ.innerHTML =  `${saturnus.circumference } km`
    maxTemp.innerHTML =  `${saturnus.temp.day} C`
    minTemp.innerHTML =  `${saturnus.temp.night } C`
    moons.innerHTML = saturnus.moons.join(', ')
    section.classList.toggle('hide') 

    
  
})

const userClick9 = document.querySelector('.uranus').addEventListener('click', function(){
    h1.innerHTML = uranus.name
    h2.innerHTML = uranus.latinName
    p.innerHTML = uranus.desc
    distance.innerHTML = `${uranus.distance} km`
    circ.innerHTML =  `${uranus.circumference  } km`
    maxTemp.innerHTML = `${uranus.temp.day} C`
    minTemp.innerHTML = `${uranus.temp.night} C`
    moons.innerHTML = uranus.moons.join(', ')
    section.classList.toggle('hide') 

  
})


const userClick8 = document.querySelector('.neptunus').addEventListener('click', function(){
    h1.innerHTML = neptunus.name
    h2.innerHTML = neptunus.latinName
    p.innerHTML = neptunus.desc
    distance.innerHTML = `${neptunus.distance} km`
    circ.innerHTML = `${neptunus.circumference  } km`
    maxTemp.innerHTML = `${neptunus.temp.day} C`
    minTemp.innerHTML = `${neptunus.temp.night } C`
    moons.innerHTML = neptunus.moons.join(', ')
    section.classList.toggle('hide') 

    
})



//lyssna fter click på DOM addeventlistener
// vid cklick ta reda på vilken planet jag clickade på i array
// visa planetens info i en section 


btn.addEventListener('click', function(){
    section.classList.toggle('hide') 

})

