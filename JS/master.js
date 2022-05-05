let url = "https://www.google.com/search?q=";
let today = new Date();
let time = today.getHours();
let inputField = document.querySelector(".search-bar .input-field input");
let section = document.querySelector("section");
let button = document.querySelector("button");
let greetingDiv = document.querySelector(".greetings");

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getSearchResult();
  }
});

button.onclick = () => {
  getSearchResult();
};

window.onload = () => {
  if (time < 12) {
    greetingDiv.innerHTML = "Good Morning, Amr";
    section.classList.remove("evening");
  } else {
    greetingDiv.innerHTML = "Good Evening, Amr";
    section.classList.add("evening");
  }
};

function getSearchResult() {
  if (inputField.value !== "") {
    let query = inputField.value;
    let need = `${url}${query}`;
    window.open(need);
  }
  inputField.value = "";
}
