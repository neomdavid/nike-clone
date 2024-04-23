const topDropDownContainers = document.querySelectorAll('.js-dropdown-top-container');

topDropDownContainers.forEach(topDropDownContainer => {
  const bottomDropDownContainer = topDropDownContainer.nextElementSibling;
  const imgTopDropDown = topDropDownContainer.querySelector('img');

  topDropDownContainer.addEventListener('click', () => {
    if (bottomDropDownContainer.classList.contains('isNotClicked')) {
      bottomDropDownContainer.classList.remove('isNotClicked');
      imgTopDropDown.src = 'images/nav/up.png';
    } else {
      bottomDropDownContainer.classList.add('isNotClicked');
      imgTopDropDown.src = 'images/nav/down.png';
    }
  });
});
