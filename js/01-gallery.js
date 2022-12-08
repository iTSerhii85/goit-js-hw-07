import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// ! Получил доступ к диву
const galleryEl = document.querySelector('.gallery');

// ! Создал разметку
const markup = galleryItems.reduce
((acc,{preview, original, description}) => acc +
`<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`
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
    const instance = basicLightbox.create(`
         <img src="${event.target.dataset.source}" width="800" height="600">
         `);

    // ? Проверка нажатия на целевой элемент
    if (event.target.classList.contains('gallery__image')) {
         // ? Если клик по картинке вызываем функцию библиотеки basicLightbox (открытие модалки)
        instance.show();
        
        // ? Добавляем слушателя по кнопке
        galleryEl.addEventListener('keydown', (event) => {
        if (event.code === 'Escape'){
          // ? Если нажата кнопка "ESC" закрываем модалку
          instance.close();
        }
      });
    };
    // ? В любом другом случае выходим из функции
    return;
  };

