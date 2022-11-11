
import Notiflix from 'notiflix';

function fetchCountries(name){    
    fetch(`https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`)
    .then(response=>{
        return response.json();
    })
    .then(country=>{
        console.log(country); 
        if (country.length>10){
            document.querySelector('.country-list').innerHTML=country.map(item=>``).join('');  
            Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        } 
        else if (country.length<2){             
            document.querySelector('.country-list').innerHTML = country.map(item=>
                `<div class="contener">   
                    <img class="img" src="${item.flags.svg}" alt="${item.name}"/>
                    <p class="">${item.name}</p>
                </div>
                <p class="">Capital: ${item.capital}</p>
                <p class="">Population: ${item.population}</p>
                <p class="">Languages: ${item.languages.map(item=>`${item.name}, `).join('')}</p>`)    
            .join('');                   
        } 
        else {
            document.querySelector('.country-list').innerHTML=country.map(item=>
                `<div class="flex"> 
                    <img class="img" src="${item.flags.svg}" alt="${item.name}"/>
                    <p class="">${item.name}</p> 
                </div>`)    
            .join('');        
        }
    })
    .catch(error=>{
        document.querySelector('.country-list').classList.add('clear');
        Notiflix.Notify.failure('Oops, there is no country with that name');
    })
} 


export default {fetchCountries};