import './css/styles.css';
import Notiflix from 'notiflix';
import API from './fetchCountries';
const result = _.add(2, 3);
console.log(result); // 5
const DEBOUNCE_DELAY = 300;
document.querySelector('#search-box').addEventListener ('input', ()=>API.fetchCountries(document.querySelector('#search-box').value.trim()));



