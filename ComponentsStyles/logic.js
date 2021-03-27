//toast logic
let successVar = document.querySelector(".success");
let warningVar = document.querySelector(".warning");
let errorVar = document.querySelector(".error");

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
