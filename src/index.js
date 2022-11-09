import './css/styles.css';
import Notiflix from 'notiflix';

// import API from './fetchCountries';
_.debounce(() => {
    console.log("Scroll handler call after 300ms pause");
  }, 3000)
const DEBOUNCE_DELAY = 300;
const countryList = document.querySelector('.country-list');
const inputEl = document.querySelector('#search-box');
inputEl.addEventListener ('input', onInput);

function onInput(){   
    fetchCountries(inputEl.value);
} 

function fetchCountries(name){    
    fetch(`https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`)
    .then(response=>{
        return response.json();
    })
    .then(country=>{
        if (country.length>10){
            const markup=country.map(item=>``)    
            countryList.innerHTML=markup.join('');  
            Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        } 
        else if (country.length<2){  
            const markup=country.map(item=>
                `<div class="contener">   
                    <img class="img" src="${item.flags.svg}" alt="${item.name}"/>
                    <p class="">${item.name}</p>
                </div>
                <p class="">Capital: ${item.capital}</p>
                <p class="">Population: ${item.population}</p>
                <p class="">Languages:  ${item.languages[0].nativeName}</p>`)    
            countryList.innerHTML=markup.join('');        
        } 
        else {
            const markup=country.map(item=>
                `<div class="flex"> 
                    <img class="img" src="${item.flags.svg}" alt="${item.name}"/>
                    <p class="">${item.name}</p> 
                </div>`)    
            countryList.innerHTML=markup.join('');        
        }
    })
    .catch(error=>{
        countryList.classList.add('clear');
        Notiflix.Notify.failure('Oops, there is no country with that name');
    })
} 
