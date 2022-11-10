import './css/styles.css';
import Notiflix from 'notiflix';
import API from './fetchCountries';

// console.log(_.add(2, 3)); 

const DEBOUNCE_DELAY = 300;
const onInput = document.querySelector('#search-box');
onInput.addEventListener ('input', ()=>API.fetchCountries(onInput.value.trim()));



