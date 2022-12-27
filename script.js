const carousels = document.querySelectorAll(".carousel");
const btnRight = document.querySelector(".btn--right");
const btnLeft = document.querySelector(".btn--left");
const dots = document.querySelectorAll(".dot");
const maxSlide = carousels.length - 1;
let num = 0;
//transform
function transferSlide(currNum) {
  carousels.forEach((carousel, i) => {
    carousel.style.transform = `translateX(${(i - num) * 100}%)`;
  });
}
// dot active
function activeDot() {
  dots.forEach((dot) => {
    dot.classList.remove("dot--fill");
  });
  const currDot = document.querySelector(`[data-dot="${num}"]`);
  currDot.classList.add("dot--fill");
}
//nextSlide
function nextSlide() {
  if (num === maxSlide) {
    num = 0;
  } else {
    num++;
  }
  transferSlide(num);
  activeDot(num);
}
// previous slideS
function prevSlide() {
  if (num === 0) {
    num = maxSlide;
  } else {
    num--;
  }
  transferSlide(num);
  activeDot(num);
}

// click on dot
dots.forEach((dot) => {
  dot.addEventListener("click", function () {
    const dataNum = +this.dataset.dot;
    num = dataNum;
    transferSlide(num);
    activeDot(num);
  });
});

// right
btnRight.addEventListener("click", nextSlide);
document.addEventListener("keydown", (e) => {
  e.key === "ArrowRight" && nextSlide();
});
// left
btnLeft.addEventListener("click", prevSlide);
document.addEventListener("keydown", (e) => {
  e.key === "ArrowLeft" && prevSlide();
});
function init() {
  transferSlide(0);
  activeDot(0);
}
init();

// Accordion
const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("click", function (e) {
    this.classList.toggle("open");
  });
});
