import dataBase from "../mokedData.json";

document.querySelector(".submit").addEventListener("click", connect(evt));
function connect(evt) {
  evt.preventDefault();
  let email = document.getElementById("email").value;
  pass = document.getElementById("name").value;
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
  if (emailRegExp.test(email.value) && pass.value != "") {
    post();
  } else {
    document.querySelector(".error").textContent =
      "e-mail ou mot de passe invalide";
  }
}

/* export const connect =
  (email, password, rememberChecked) => async (dispatch, getState) => {
    const response = await fetch(
      "https://api.pierre-le-developpeur.com/api/user/log_in",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    if (response.ok) {
      const result = await response.json();
      dispatch(userSlice.actions.setToken(result.token));
      if (rememberChecked === true) {
        setStorage(result.token, result.password);
      }
      return true;
    }
    return false;
  };*/

async function post() {
  const login = { email: email.value, password: pass.value };
  const post = await fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(login),
  });
  let result = await post.json();
  //console.log(result);
  if (result.token == null) {
    error();
  } else {
    //console.log(result.userId);
    window.localStorage.setItem("token", result.token);
    window.localStorage.setItem("userId", result.userId);
    document.location.href = "./home.html";
  }
}
