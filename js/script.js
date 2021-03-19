"use strict";

const backToTopBtn = document.querySelector(".btn");

const whenScroll = function () {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    backToTopBtn.style.display = "inline-flex";
  } else {
    backToTopBtn.style.display = "none";
  }
};

const backToTop = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

window.onscroll = whenScroll;

backToTopBtn.addEventListener("click", backToTop);
