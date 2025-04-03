let yes_btn = document.getElementById("yes_btn");
let no_btn = document.getElementById("no_btn");
let container = document.querySelector(".container");
let me_too = document.querySelector(".me_too");

let num = true;

function turn_page() {
  container.style.display = "none";
  me_too.style.display = "flex";
}

// function change_no_btn() {
//   if (num) {
//     no_btn.style.left = "65%";
//     no_btn.style.top = "52.3%";
// 		num = false
//   } else{
// 		no_btn.style.left = "50%";
//     no_btn.style.top = "52.3%";
// 		num = true
// 	}
// }
function change_no_btn() {
  let x = Math.random() * (window.innerWidth - 100);
  let y = Math.random() * (window.innerHeight - 50);
  no_btn.style.left = `${x}px`;
  no_btn.style.top = `${y}px`;
}
