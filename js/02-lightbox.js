import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// ! Получил доступ к диву
const galleryEl = document.querySelector('.gallery');

// ! Создал разметку
const markup = galleryItems.reduce
((acc,{preview, original, description}) => acc +
`<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt='${description}'/>
</a>`
,'');

// ! Добавил разметку
galleryEl.insertAdjacentHTML('beforeend', markup);

// ! Повесил слушателя по клику на родительский элемент
galleryEl.addEventListener('click', onClick);

// ! Колбэк функция на слушателя
function onClick (event) {
    // ? Запретил действия браузера по умолчанию
    event.preventDefault();

    // ? Скрипт библиотеки
    let lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});

    lightbox.on();
  };