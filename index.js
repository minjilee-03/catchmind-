$modal = document.querySelector('.js-modal');
$open = document.querySelector('.js-modal-open');
$close = document.querySelector('.js-modal-close');

$open.addEventListener('click', () => {
    $modal.classList.add('is-open');
});

$close.addEventListener('click', () => {
    $modal.classList.remove('is-open');
});
