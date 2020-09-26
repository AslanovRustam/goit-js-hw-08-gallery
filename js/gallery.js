import galleryItems from "./gallery-items.js";

function createGlleryItemMarkup(galleryItems) {
  const galleryItemMarkup = galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
    <a  class="gallery__link"
        href="${original}"
        >
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
    </li>`;
    })
    .join(``);
  return galleryItemMarkup;
}
const galleryCollection = document.querySelector(`.js-gallery`);

const galleryMarkup = createGlleryItemMarkup(galleryItems);

galleryCollection.insertAdjacentHTML(`beforeend`, galleryMarkup);

const galleryItemClick = document.querySelector(`.js-gallery`);
galleryItemClick.addEventListener(`click`, openModal);
function openModal(evt) {
  window.addEventListener(`keydown`, keyEscPress);
  evt.preventDefault();
  if (evt.target.nodeName !== `IMG`) {
    return;
  }
  const modalOpen = document.querySelector(`div.lightbox`);
  modalOpen.classList.add(`is-open`);
}

const modalBtn = document.querySelector(`.lightbox__button`);
modalBtn.addEventListener(`click`, closeModal);
function closeModal(evt) {
  const modalOpen = document.querySelector(`div.lightbox`);
  modalOpen.classList.remove(`is-open`);
  window.removeEventListener(`keydown`, keyEscPress);
}

const backdropClick = document.querySelector(`.lightbox__overlay`);
backdropClick.addEventListener(`click`, onBackdropClick);
function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    closeModal();
  }
}

function keyEscPress(evt) {
  console.log(evt.code);
  if (evt.code === `Escape`) {
    closeModal();
  }
}
