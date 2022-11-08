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

export default {fetchCountries};