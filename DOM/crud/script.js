let form = document.querySelector("form");
let main = document.querySelector("main");

let usersArr = JSON.parse(localStorage.getItem("usersArr"));
console.log(usersArr);

let isUpdatedUser;

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
                <button onclick="updateUser(${val.id})">Update</button>
                <button onclick="delUser(${val.id})" id="del">Delete</button>
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

  if (isUpdatedUser) {
    let index = usersArr.findIndex((val) => val.id === isUpdatedUser);
    usersArr[index] = obj;
    isUpdatedUser = null;
  } else {
    usersArr.push(obj);
  }

  localStorage.setItem("usersArr", JSON.stringify(usersArr));

  render();

  form.reset();
});

let delUser = (id) => {
  //   usersArr.splice(id, 1);

  usersArr = usersArr.filter((val) => val.id !== id);
  localStorage.setItem("usersArr", JSON.stringify(usersArr));

  render();
};

let updateUser = (id) => {
  isUpdatedUser = id;

  let userObj = usersArr.find((val) => val.id === id);

  form[0].value = userObj.name;
  form[1].value = userObj.email;
  form[2].value = userObj.imageUrl;
};

render();
