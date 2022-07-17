const scrantonImage = new URL("./images/Scranton.jpeg", import.meta.url);
const siliconVImage = new URL("./images/SiliconValley.png", import.meta.url);
const pawneeImage = new URL("./images/pawnee.jpeg", import.meta.url);
const ecorpImage = new URL("./images/ECorp.jpeg", import.meta.url);
const downtonImage = new URL("./images/Downton.jpeg", import.meta.url);
const disneyImage = new URL("./images/disneyworld.jpeg", import.meta.url);

export const editButton = document.querySelector(".profile__buttons-edit");
export const addButton = document.querySelector(".profile__buttons-add");

export const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export const initialCards = [
  {
    text: "Scranton",
    link: scrantonImage,
  },
  {
    text: "Silicon Valley",
    link: siliconVImage,
  },
  {
    text: "E Corp",
    link: ecorpImage,
  },
  {
    text: "Downton",
    link: downtonImage,
  },
  {
    text: "Pawnee",
    link: pawneeImage,
  },
  {
    text: "Disney World",
    link: disneyImage,
  },
];