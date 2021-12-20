import BASE_URL from "../constants/url.constants.js";

export async function getCountry(countryName) {
  let response = await fetch(`${BASE_URL}/name/${countryName}`);
  let data = await response.json();
  console.log(data);
  return data;
}
