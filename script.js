//*** to hide loader ***//

window.onload = function () {
  document.querySelector(".loader").classList.add("remove");
}

const fav_hearts = document.querySelectorAll(".items-imgBx .fav-heart");
for (key of fav_hearts) {
  key.onclick = function () {
    this.classList.toggle("fill");
  }
}

document.querySelector(".navbar-toggler").onclick = function () {
  document.querySelector(" #navigation").classList.toggle('display');
};

//*** slider control ***//

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slides = document.querySelectorAll(".slides");
const indicators = document.querySelectorAll(".indicators");
let index = 0;

next.onclick = nextSlide;

prev.onclick = prevSlide;

function nextSlide() {
  if (index == slides.length - 1) {
    index = 0;
  } else {
    index++;
  }
  resetTimer();
  changeSlide();
  changeIndicator();
}

function prevSlide() {
  if (index == 0) {
    index = slides.length - 1;
  } else {
    index--;
  }
  resetTimer();
  changeSlide();
  changeIndicator();
}

indicators.forEach(function (v, i) {
  indicators[i].onclick = function () {
    index = i;
    resetTimer();
    changeSlide();
    changeIndicator();
  };
});

function changeSlide() {
  for (key of slides) {
    key.classList.remove("active");
  }
  slides[index].classList.add("active");
}

function changeIndicator() {
  for (key of indicators) {
    key.classList.remove("active");
  }
  indicators[index].classList.add("active");
}

let setTimer = setInterval(() => {
  nextSlide();
}, 4000);

function resetTimer() {
  clearInterval(setTimer);
  setTimer = setInterval(() => {
    nextSlide();
  }, 4000);
}