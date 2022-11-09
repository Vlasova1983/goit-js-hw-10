import './css/styles.css';
import Notiflix from 'notiflix';
import API from './fetchCountries';

const DEBOUNCE_DELAY = 300;
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const inputEl = document.querySelector('#search-box');
inputEl.addEventListener ('input', countrySearch);

function countrySearch() {   
    fetchCountries(inputEl.value) ;
};

function fetchCountries(name){    
    fetch(`https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`)
    .then(response=>{
        return response.json();
    })
    .then(country=>{
        makeFieldsCountry(country)                 
    })
    .catch(error=>{
        Notiflix.Notify.failure('Oops, there is no country with that name');
    })
} 
 
 
function makeFieldsCountry(country){
    if (country.length>10){
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    } else if (country.length<2){
        const a =  `<div class="contener">   
                        <img class="img" src="${country[0].flags.svg}" alt="${country[0].name}"/>
                        <p class="">${country[0].name}</p>
                    </div>
                    <p class="">Capital: ${country[0].capital}</p>
                    <p class="">Population: ${country[0].population}</p>
                    <p class="">Languages:  ${country[0].languages[0].nativeName}</p>  
                    ` 
        countryInfo.insertAdjacentHTML('beforeend', a);
    } else {
        const a = `<img class="img" src="${country[0].flags.svg}" alt="${country[0].name}"/>
                    <p class="">${country[0].name}</p> 
                    ` 
                    console.log(a);
        countryList.insertAdjacentHTML('beforeend', a); 
      }
}
    
