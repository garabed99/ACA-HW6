export async function fetchCountries(url) {
  let response = await fetch(`${url}all`);
  let data = await response.json();
  console.log(data);
  return data;
}
