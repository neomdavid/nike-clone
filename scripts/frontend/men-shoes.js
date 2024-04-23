
document.querySelectorAll('.dropdowns-container .visible').forEach((visible) => {
    visible.addEventListener('click', () => {
        const droppable = visible.nextElementSibling;
        const img = visible.querySelector('img');
        if (droppable.classList.contains('clicked')) {
            droppable.classList.remove('clicked');
            img.src ='images/nav/down.png';
        } else {
            droppable.classList.add('clicked');
            img.src ='images/nav/up.png';
        }
    });
});
