//Elements

const bodyEle = document.querySelector(".body");
const themeButtons = document.querySelector(".theme-buttons");
const heading = document.querySelector(".heading");
const lightButton = document.querySelector(".light");
const darkButton = document.querySelector(".dark");
const searchEle = document.querySelector(".search");
const searchButton = document.querySelector(".search-btn");
const searchedEle = document.getElementById("searched");
const searchedOneEle = document.getElementById("searchedOne");
const searchedTwoEle = document.getElementById("searchedTwo");

//Event to change the theme to light mode

lightButton.addEventListener("click", function () {
  bodyEle.style.backgroundColor = "white";
  bodyEle.style.color = "black";
  themeButtons.style.color = "black";
  searchButton.style.backgroundColor = "white";
  searchButton.style.color = "black";
  lightButton.style.color = "black";
  darkButton.style.color = "black";
  heading.style.color = "black";
  searchedEle.style.backgroundColor = "white";
  searchedOneEle.style.color = "black";
  searchedTwoEle.style.color = "black";
});

//Event to change the theme to dark mode

darkButton.addEventListener("click", function () {
  bodyEle.style.backgroundColor = "black";
  bodyEle.style.color = "white";
  themeButtons.style.color = "white";
  searchButton.style.backgroundColor = "black";
  searchButton.style.color = "white";
  lightButton.style.color = "white";
  darkButton.style.color = "white";
  heading.style.color = "white";
  searchedEle.style.backgroundColor = "black";
  searchedOneEle.style.color = "white";
  searchedTwoEle.style.color = "white";
});

// Search Button event

searchButton.addEventListener("click", function () {
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchEle.value}`)
    .then((res) => res.json())
    .then((entries) => {
      var meaning = entries[0]["word"];
      var definition =
        entries[0]["meanings"][0]["definitions"][0]["definition"];
      searchedEle.classList.add("display");
      searchedOneEle.classList.add("meanings");
      searchedTwoEle.classList.add("definitions");
      searchedOneEle.innerText = `${meaning}`;
      searchedTwoEle.innerText = `Definition -  ${definition}`;
    })
    .catch((err) => {
      if (searchEle.value === "") {
        alert("Search box is empty...🙁 | Type something");
      } else {
        alert("Please, Enter a valid word..⚠️");
      }
    });
});
