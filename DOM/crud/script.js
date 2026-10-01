let form = document.querySelector("form");
let main = document.querySelector("main");

let usersArr = [];

let render = () => {
  main.innerHTML = "";

  usersArr.forEach((val, index) => {
    main.innerHTML += `<div class="user-card">
            <div class="img">
                <img src=${val.imageUrl}
                    alt="">
            </div>
            <div class="text">
                <h1>${val.name}</h1>
                <p>${val.email}</p>
            </div>
            <div class="btns">
                <button>Update</button>
                <button onclick="delUser(${index})" id="del">Delete</button>
            </div>
        </div>`;
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = e.target[0].value;
  let email = e.target[1].value;
  let imageUrl = e.target[2].value;

  if (name.trim() === "" || email.trim() === "" || imageUrl.trim() === "") {
    alert("spaces not allowed");
    return;
  }

  let obj = {
    id: Date.now(),
    name,
    email,
    imageUrl,
  };

  usersArr.push(obj);

  render();

  form.reset();
});

let delUser = (id) => {
  usersArr.splice(id, 1);

  render();
};
