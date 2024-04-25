console.log('droppable')
document.querySelectorAll('.dropdowns-container .visible').forEach((visible) => {
    visible.click();
    visible.addEventListener('click', () => {
        console.log('clicked')
        const droppable = visible.nextEle2mentSibling;
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
