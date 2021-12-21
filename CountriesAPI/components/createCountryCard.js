import COUNTRY_PATH from "../constants/country.path.js";

function createCountryCard(el, body) {
  console.log(el);
  let wrapper = document.createElement("div");
  let flag = document.createElement("img");
  let capitalName = document.createElement("p");
  let countryName = document.createElement("h3");
  let specificWrapper = document.createElement("a");

  console.log(specificWrapper);
  specificWrapper.href = "country.index.html";
  wrapper.classList.add("countryCard");
  flag.src = el.flags.png;
  wrapper.appendChild(flag);
  countryName.innerText = `${el.name.official}`;
  capitalName.innerText = `${el.capital}`;
  wrapper.appendChild(countryName);
  wrapper.appendChild(capitalName);
  specificWrapper.appendChild(wrapper);
  body.appendChild(specificWrapper);
}

export default createCountryCard;
