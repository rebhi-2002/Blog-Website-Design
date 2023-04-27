const menuToggle = document.querySelector(".menuToggle");
const navigation = document.querySelector(".navigation");

menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
};

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// now, we will fix navigation issue.....menu close after clicked any link

// First Way
function toggleMenu() {
  menuToggle.classList.remove("active");
  navigation.classList.remove("active");
}

// Second Way:

// document.querySelector(".navigation").addEventListener("click", function () {
//   menuToggle.classList.remove("active");
//   navigation.classList.remove("active");
// });

// Third Way:

// let list = document.querySelectorAll(".navigation li");
// list.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     menuToggle.classList.remove("active");
//     navigation.classList.remove("active");
//   });
// });
