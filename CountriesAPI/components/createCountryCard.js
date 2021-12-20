function createCountryCard(el, body) {
  let wrapper = document.createElement("div");
  let flag = document.createElement("img");
  let capitalName = document.createElement("p");
  let countryName = document.createElement("h3");
  let specificWrapper = document.createElement("a");
  
  wrapper.classList.add("countryCard");
  flag.src = el.flags.png;
  wrapper.appendChild(flag);
  countryName.innerText = `${el.name.official}`;
  capitalName.innerText = `${el.capital}`;
  wrapper.appendChild(countryName);
  wrapper.appendChild(capitalName);
  body.appendChild(wrapper);
  specificWrapper.appendChild(wrapper);
}

export default createCountryCard;
