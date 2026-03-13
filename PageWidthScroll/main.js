let scrollbar = document.querySelector(".scrollbar");

let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", function () {
  scrollbar.style.width = `${(scrollY / height) * 100}%`;
});
