let form = document.querySelector("form");
let main = document.querySelector("main");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = e.target[0].value;
  let email = e.target[1].value;
  let imageUrl = e.target[2].value;

  if (name.trim() === "" || email.trim() === "" || imageUrl.trim() === "") {
    alert("spaces not allowed");
    return;
  }

  //   if (!name || !email || !imageUrl) {
  //     alert("all fields are required");
  //     return;
  //   }

  let obj = {
    name,
    email,
    imageUrl,
  };

  main.innerHTML += `<div class="user-card">
            <div class="img">
                <img src=${imageUrl}
                    alt="">
            </div>
            <div class="text">
                <h1>${name}</h1>
                <p>${email}</p>
            </div>
            <div class="btns">
                <button>Update</button>
                <button id="del">Delete</button>
            </div>
        </div>`;

  form.reset();
});
