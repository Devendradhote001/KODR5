let imgs = [
  "https://imageio.forbes.com/specials-images/imageserve/62d700cd6094d2c180f269b9/0x0.jpg?format=jpg&crop=959,959,x0,y0,safe&height=416&width=416&fit=bounds",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8AP6LBo7c4Ld2PgJcuNk8GVniNMKRo59vQxk8GBlvL3E-SYwzMxh_tK9k&s=10",
  "https://i0.wp.com/hindupad.com/wp-content/uploads/Yogi-Adityanath.jpg?fit=500%2C500&ssl=1",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwyStYXLfIiyhHnBAnNjrPbBl_r_8_c2xIAxqRg7_gJscVc3B5kpStOcGY&s=10",
  "https://www.factinate.com/storage/app/media/factinate/2025/5/5/Gandhi%20flip.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw7S6Wf2Sc4g4aGFoRZGN0LzZ9dXf5cU6AJxmUH5hW0fRE6dOBrXGGTfc&s=10",
  "https://hubspot-assets.thisismess.io/speaker-images/Dario.png",
  "https://static.time.com/v3/assets/bltea6093859af6183b/blte01f158e081bde28/6abd8c0e0ce84a2787fa92c7/Winters_Time_Trump_12_v1_1.jpg?branch=production&width=3840&quality=75&auto=webp&crop=4:5",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3TFEVf03PZ9s56ZDyHc3upeJrPgDTwPWnel1C1jf6vxDzujuHse0aqQ&s=10",
];

let box = document.querySelector(".box");
let btn = document.querySelector("button");
let time = document.querySelector("#time");
let score = document.querySelector("#score");

let count = 0;
let points = 0;

btn.addEventListener("click", () => {
  let interval;
  interval = setInterval(() => {
    count++;
    time.textContent = count;
    let randomImages = Math.floor(Math.random() * imgs.length);

    box.style.backgroundImage = `url(${imgs[randomImages]})`;

    let rt = Math.floor(Math.random() * 85);
    let rl = Math.floor(Math.random() * 85);

    box.style.top = `${rt}%`;
    box.style.left = `${rl}%`;

    btn.disabled = true;
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
    box.style.display = "none";
  }, 10000);
});

box.addEventListener("click", () => {
  points++;
  score.textContent = points;
});
