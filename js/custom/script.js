const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});

const formOpenBtn2 = document.querySelector("#form-open2"),
  home2 = document.querySelector(".home2"),
  formContainer2 = document.querySelector(".form_container2"),
  formCloseBtn2 = document.querySelector(".form_close2"),
  signupBtn2 = document.querySelector("#signup2"),
  loginBtn2 = document.querySelector("#login2"),
  pwShowHide2 = document.querySelectorAll(".pw_hide2");

formOpenBtn2.addEventListener("click", () => home2.classList.add("show"));
formCloseBtn2.addEventListener("click", () => home2.classList.remove("show"));

pwShowHide2.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn2.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer2.classList.add("active");
});
loginBtn2.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer2.classList.remove("active");
});
