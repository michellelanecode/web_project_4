export default class Card {
  constructor(data, cardSelector, handleClick) {
    this._text = data.text;
    this._link = data.link;
    this._handleClick = handleClick;
    this._cardSelector = cardSelector;
    this._cardElement = this._getCardTemplate().cloneNode(true);
    this._likeButton = this._cardElement.querySelector(".card__lovebutton");
    this._deleteButton = this._cardElement.querySelector(".card__deletebutton");
    this._cardImage = this._cardElement.querySelector(".card__image");
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", (evt) => {
      this._updateLikeButton(evt);
    });
    this._deleteButton.addEventListener("click", (evt) =>
      this._deletePhoto(evt)
    );
    this._cardImage.addEventListener("click", this._handleClick);
  }

  _getCardTemplate() {
    return document.querySelector(this._cardSelector).content;
  }

  _updateLikeButton(evt) {
    evt.target.classList.toggle("card__lovebutton_active");
  }

  _deletePhoto(evt) {
    const elementToRemove = evt.target.closest(".card");
    elementToRemove.remove();
  }

  createCard() {
    this._cardImage.src = this._link;
    this._cardImage.alt = this._text;
    this._cardElement.querySelector(".card__caption").textContent = this._text;
    this._setEventListeners();
    return this._cardElement;
  }
}
