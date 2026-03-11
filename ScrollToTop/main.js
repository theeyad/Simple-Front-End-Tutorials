let toUpBtn = document.querySelector(".up");

window.addEventListener("scroll", function () {
  console.log(this.scrollY);
  if (this.scrollY >= 1000) {
    toUpBtn.classList.add("show");
  } else {
    toUpBtn.classList.remove("show");
  }
});

toUpBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
