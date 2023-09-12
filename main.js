const likeIcon = document.querySelector('#likeIcon');

likeIcon.addEventListener('click', function () {
    const currentColor = likeIcon.style.color;
    if (currentColor === 'rgb(132, 130, 154)') {
        likeIcon.style.color = '#ff0000';
    } else {
        likeIcon.style.color = '#84829a';
    }
});