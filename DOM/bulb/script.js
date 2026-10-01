let main = document.querySelector("main");
let btn = document.querySelector("button");

let arr = [
  "Shobhit",
  "Ranveer",
  "Elvish",
  "Samay",
  "Bhuvan",
  "Harsh",
  "Carry",
  "Ashish",
];

let randomColor = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  return `rgb(${r} ${g} ${b})`;
};

btn.addEventListener("click", () => {
  let h1 = document.createElement("h1");
  let randomIndex = Math.floor(Math.random() * arr.length);

  h1.textContent = arr[randomIndex];
  h1.style.color = randomColor();

  main.append(h1);
});
