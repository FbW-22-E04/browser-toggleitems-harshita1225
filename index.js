const cityList = document.querySelector("ul");
const button = document.querySelector("button");
const city = document.querySelectorAll("li");
const message = document.querySelector(".message");

// to show selected city name
city.forEach((place) => {
  place.addEventListener("mouseover", function () {
    place.classList.add("active");
    message.classList.remove("d-none");
    message.textContent = `You have selected ${place.textContent}`;
  });
  place.addEventListener("mouseout", function () {
    place.classList.remove("active");
    message.classList.add("d-none");
    //message.textContent = `You have selected ${place.textContent}`;
  });
});
// open and close button to show or hide links !!
function displayHideToggle() {
  if (cityList.classList.contains("d-none")) {
    cityList.classList.remove("d-none");
    button.textContent = "Hide Destinations";
  } else {
    cityList.classList.add("d-none");
    button.textContent = "show Destinations";
  }
}

button.addEventListener("click", displayHideToggle);
