import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import API from './fetchCountries';


const DEBOUNCE_DELAY = 3000;
const input = document.querySelector('#search-box');
input.addEventListener('input', debounce(onInput,DEBOUNCE_DELAY));

function onInput() {
    API.fetchCountries(input.value.trim());
}

