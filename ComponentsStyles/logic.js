//toast logic
let successVar = document.querySelector(".success");
let warningVar = document.querySelector(".warning");
let errorVar = document.querySelector(".error");
let deleteMessg = document.querySelector(".delMessg");

const Toast = {
  init() {
    this.hideTimeout = null;

    this.el = document.createElement("div");
    this.el.className = "toast";
    document.body.appendChild(this.el);
  },

  show(message, state) {
    clearTimeout(this.hideTimeout);

    this.el.textContent = message;
    this.el.className = "toast toastVisible";

    if (state) {
      this.el.classList.add(`toast${state}`);
    }

    this.hideTimeout = setTimeout(() => {
      this.el.classList.remove("toastVisible");
    }, 2000);
  },
};

document.addEventListener("DOMContentLoaded", () => Toast.init());
successVar.addEventListener("click", () =>
  Toast.show("success message !!", "Success")
);

warningVar.addEventListener("click", () =>
  Toast.show("warning message  !!", "Warning")
);

errorVar.addEventListener("click", () =>
  Toast.show("error message  !!", "Error")
);

deleteMessg.addEventListener("click", () => {
  Toast.show("File Deleted Successfully  !!", "Success");
  console.log("error", this.el);
});

// Carousel Logic
var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

//Modal Button
var modalTrig = document.querySelector(".modalTrigger");
var modalBg = document.querySelector(".modalBg");
var deleteBtn = document.querySelector(".deleteBtn");
var cancelBtn = document.querySelector(".cancelBtn");
var crossBtn = document.querySelector(".crossBtn");

modalTrig.addEventListener("click", () => {
  modalBg.classList.add("bgActive");
});

deleteBtn.addEventListener("click", () => {
  modalBg.classList.remove("bgActive");
});

cancelBtn.addEventListener("click", () => {
  modalBg.classList.remove("bgActive");
});

crossBtn.addEventListener("click", () => {
  modalBg.classList.remove("bgActive");
});

//Form validation
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "Password2 cannot be blank");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Passwords does not match");
  } else {
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "formControl error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "formControl success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

//File Input
Array.prototype.forEach.call(
  document.querySelectorAll(".fileInputButton"),
  function (button) {
    const hiddenInput = button.parentElement.querySelector(".fileInput");
    const label = button.parentElement.querySelector(".fileInputLabel");
    const defaultLabelText = "No file(s) selected";

    // Set default text for label
    label.textContent = defaultLabelText;
    label.title = defaultLabelText;

    button.addEventListener("click", function () {
      hiddenInput.click();
    });

    hiddenInput.addEventListener("change", function () {
      const filenameList = Array.prototype.map.call(
        hiddenInput.files,
        function (file) {
          return file.name;
        }
      );

      label.textContent = filenameList.join(", ") || defaultLabelText;
      label.title = label.textContent;
    });
  }
);
