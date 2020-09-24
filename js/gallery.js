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
