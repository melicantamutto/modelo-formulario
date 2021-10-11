const getId = (id) => document.getElementById(id);

const regexName = /^[a-zA-ZÀ-ú ]+$/;
const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexPass =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

const validateName = (value) => regexName.test(value);

const validateEmail = (value) => regexEmail.test(value.toLowerCase());

const validatePassword = (value) => regexPass.test(value);

const validateForm = () => {
  if (
    validateName(getId("name").value) &&
    validateEmail(getId("email").value) &&
    validatePassword(getId("password").value) &&
    getId("terms").checked
  ) {
    openModal("Formulario validado");
    return true;
  } else {
    openModal("Formulario no válido");
    return false;
  }
};

const checkInput = (e) => {
  const label = document.querySelector(`label[for="${e.id}"]`);
  if (e.value !== "") {
    label.classList.add("label-top");
  } else {
    label.classList.remove("label-top");
  }
};

window.addEventListener('load', ()=>{
  document.querySelectorAll('.input-container input').forEach(input => {
    checkInput(input);
  });
})

/* -------------------------------------------------------------------------- */
/*                                    Modal                                   */
/* -------------------------------------------------------------------------- */

const modal = getId("modal");
const modalContainer = getId("modalContainer");

const openModal = (text) => {
  modalContainer.style.opacity = "1";
  modalContainer.style.visibility = "visible";
  getId("modal-text").innerText = text;
  modal.classList.toggle("modal-close");
};

getId("close").addEventListener("click", () => {
  modal.classList.add("modal-close");
  setTimeout(() => {
    modalContainer.style.opacity = "0";
    modalContainer.style.visibility = "hidden";
  }, 400);
});

window.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    modal.classList.add("modal-close");
    setTimeout(() => {
      modalContainer.style.opacity = "0";
      modalContainer.style.visibility = "hidden";
    }, 400);
  }
});
