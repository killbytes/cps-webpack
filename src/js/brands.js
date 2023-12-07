let brands = document.querySelector('.brands');
let brandsCard = brands.querySelector('.brands__card');
let readMore = brands.querySelector('.read-more');

readMore.addEventListener('click', (e) => {
    brandsCard.classList.toggle('brands__card--active');
    console.log(readMore.querySelector('.read-more__btn').textContent)
    if(readMore.querySelector('.read-more__btn').textContent == 'Скрыть') {
        readMore.querySelector('.read-more__btn').textContent = 'Показать все';
    } else {
        readMore.querySelector('.read-more__btn').textContent = 'Скрыть';
    }
});
