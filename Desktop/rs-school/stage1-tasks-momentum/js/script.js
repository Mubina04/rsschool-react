import playList from "./playList.js";
const time = document.querySelector(".time");
const current_date = document.querySelector(".date");
const greeting = document.querySelector(".greeting");
const nameInput = document.querySelector(".name");
const body = document.querySelector("body");
const slideNext = document.querySelector(".slide-next");
const slidePrev = document.querySelector(".slide-prev");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const city = document.querySelector(".city");
const weatherError = document.querySelector(".weather-error");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const changeQuote = document.querySelector(".change-quote");
const audio = new Audio();
const playBtn = document.querySelector(".play");
const playListContainer = document.querySelector(".play-list");
const playNextBtn = document.querySelector(".play-next");
const playPrevBtn = document.querySelector(".play-prev");
const settingBtn = document.querySelector(".setting");
const settingContent = document.querySelector(".setting-content");
function settingsChange(){
  console.log("setting")
  settingContent.classList.toggle('set-view')
}
settingBtn.addEventListener("click", settingsChange)

let currentIndex = 0;
let randomNum;
let isPlay = false;

// ------------- showTime ----------------
function showTime() {
  let currentTime = new Date();
  let hours = String(currentTime.getHours()).padStart(2, "0");
  let minutes = String(currentTime.getMinutes()).padStart(2, "0");
  let seconds = String(currentTime.getSeconds()).padStart(2, "0");
  let timeString = hours + ":" + minutes + ":" + seconds;
  time.textContent = timeString;
  showDate();
  showGreeting();
  setTimeout(showTime, 1000);
}
showTime();

// ------------- showDate ---------------
function showDate() {
  const date = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const currentDate = date.toLocaleDateString("en-Us", options);
  current_date.textContent = currentDate;
}

// ----------------- getHours ---------------
function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  if (hours < 12) {
    return "morning";
  } else if (hours >= 12 && hours < 18) {
    return "afternoon";
  } else if (hours >= 18 && hours < 24) {
    return "evening";
  } else if (0 <= hours < 6) {
    return "night";
  }
}

// ----------------- showGreeting ---------------
function showGreeting() {
  const timeOfDay = getTimeOfDay();
  const greetingText = `Good ${timeOfDay}`;
  greeting.textContent = greetingText;
}

// ---------------- local storage --------------------
function setLocalStorage() {
  localStorage.setItem("name", nameInput.value);
  localStorage.setItem("quote", quote.textContent);
  localStorage.setItem("author", author.textContent);
}
window.addEventListener("beforeunload", setLocalStorage);
function getLocalStorage() {
  if (localStorage.getItem("name")) {
    nameInput.value = localStorage.getItem("name");
  }
  if (localStorage.getItem("quote" || "author")) {
    quote.textContent = localStorage.getItem("quote");
    author.textContent = localStorage.getItem("author");
  }
}

window.addEventListener("load", getLocalStorage);

//  ---------------- getRandomNumber ---------------
function getRandomNum() {
  return Math.floor(Math.random() * 20 + 1);
}
randomNum = getRandomNum();

// ---------------- setBg ---------------
function setBg() {
  const img = new Image();
  const bg = String(randomNum);
  const bgNum = bg.padStart(2, "0");
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${getTimeOfDay()}/${bgNum}.jpg`;
  img.addEventListener("load", () => {
    body.style.backgroundImage = `url(${img.src})`;
  });
}
setBg();

// ---------------- getSlideNext  --------------------
function getSlideNext() {
  if (randomNum === 20) {
    randomNum = 1;
  } else {
    randomNum++;
  }
  setBg();
}
slideNext.addEventListener("click", getSlideNext);

// ---------------- getSlidePrev --------------------
function getSlidePrev() {
  if (randomNum === 1) {
    randomNum = 20;
  } else {
    randomNum--;
  }
  setBg();
}
slidePrev.addEventListener("click", getSlidePrev);

// ---------------- getWeather --------------------
async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=82dd25276fc7d06258cfdb18e91a96dc&units=metric`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();

    weatherIcon.className = "weather-icon owf";
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    humidity.textContent = `Humidity: ${Math.round(data.main.humidity)}%`;
    wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
  } catch (error) {
    weatherError.textContent = error;
    weatherIcon.classList="";
    temperature.textContent = "";
    weatherDescription.textContent ="";
    humidity.textContent = "";
    wind.textContent =""
    // Handle the error in some way, e.g. show an error message to the user
  }
}

// --------------- setCity --------------------
function setCity(event) {
  if (event.code === "Enter") {
    getWeather();
    city.blur();
  }
}
document.addEventListener("DOMContentLoaded", getWeather);
city.addEventListener("keypress", setCity);

// ---------------- getQuotes --------------------
// function getQuote() {
//   const quotes = "data.json";
//   fetch(quotes)
//     .then((res) => res.json())
//     .then((data) => {
//       let i = Math.floor(Math.random() * 9);
//       const quoteText = data[i].text;
//       const quoteAuthor = data[i].author;
//       quote.textContent = quoteText;
//       author.textContent = `- ${quoteAuthor}`;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }
async function getQuote() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const i = Math.floor(Math.random() * data.length);
    const quoteText = data[i].text;
    const quoteAuthor = data[i].author;
    quote.textContent = quoteText;
    author.textContent = `- ${quoteAuthor}`;
  } catch (error) {
    console.error(error);
  }
}

changeQuote.addEventListener("click", getQuote);
window.addEventListener("load", getQuote);

// ---------------- playAudio ---------------------
function playAudio() {
  if (!isPlay) {
    audio.src = playList[currentIndex].src;
    audio.currentTime = 0;
    audio.play();
    console.log("play audio", currentIndex);
    isPlay = true;
  } else if (isPlay) {
    audio.pause();
    console.log("Stop audio", currentIndex);
    isPlay = false;
  }
}

playBtn.addEventListener("click", playAudio);

function playNext() {
  if (currentIndex === playList.length - 1) {
    currentIndex = 0;
    playListContainer.textContent = playList[0].title;
    audio.src = playList[0].src;
    audio.play();
  } else if (playList.length - 1 > currentIndex) {
    currentIndex += 1;
    playListContainer.textContent = playList[currentIndex].title;
    audio.src = playList[currentIndex].src;
    audio.play();
    isPlay = true;
  }
}
playNextBtn.addEventListener("click", playNext);

function playPrev() {
  if (currentIndex > 0) {
    currentIndex -= 1;
    audio.src = playList[currentIndex].src;
    audio.play();
    isPlay = true;
  } else if (currentIndex === 0) {
    audio.src = playList[playList.length - 1].src;
    audio.play();
    isPlay = true;
  }
}
playPrevBtn.addEventListener("click", playPrev);

playList.forEach((el)=>{
  const li = document.createElement('li');
  li.classList.add('play-item')
  li.textContent = el.title;
  playListContainer.append(li)
})
//  ----------------- Advanced Audio --------------

// ------------------- getLinkToImage for APIs -----------------
// function getLinkToImage(){
  //   const url = 'https://api.unsplash.com/photos/random?query=morning&client_id=G7rwx50b0Qohta64KeSENxUBoNYUkC6mschysaGUHHU';
  //  fetch(url)
  //    .then(res => res.json())
  //    .then(data => {
    //      console.log(data.urls.regular)
    //    });
// }
// ------------------ get image's link from unsplash --------------------------------
async function getLinkToImage() {
  const url =
    "https://api.unsplash.com/photos/random?query=morning&client_id=G7rwx50b0Qohta64KeSENxUBoNYUkC6mschysaGUHHU";
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.urls.regular);
}
// ------------------ get image's link from flickr --------------------------------

async function getLinkToFlickr() {
  const url =
    "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7fbd269a25af1dfdaf78a08e0070b068&tags=nature&extras=url_l&format=json&nojsoncallback=1";
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.urls.regular);
}
