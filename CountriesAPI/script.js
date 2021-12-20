import { fetchCountries } from "./helpers/fetchCountries.js";
import BASE_URL from "./constants/url.constants.js";
import createCountryCard from "./components/createCountryCard.js";
import { getCountry } from "./helpers/getCountry.js";

let baseData = await fetchCountries(BASE_URL);
const input = document.querySelector(".searchInput");
const searchBtn = document.querySelector(".searchBtn");
const countriesList = document.querySelector(".countryList");
const test = document.querySelector(".test");

baseData.forEach((country) => {
  createCountryCard(country, countriesList);
});

let countrySearched = "";

searchBtn.addEventListener("click", async () => {
  countrySearched = input.value;
  const country = await getCountry(countrySearched);
  countriesList.innerText = "";
  createCountryCard(country, countriesList);
  console.log(countrySearched);
});
