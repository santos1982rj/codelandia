// REPLACE FEATHER ICONS
feather.replace();

// MENU RESPONSIVO

const toggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.l-header__list');

toggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

//Tabs

const tabTitle = document.querySelectorAll('.tab__item--title');
const tabContent = document.querySelectorAll('.tab__item--panel');

tabTitle.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabContent.forEach(content => {
      content.classList.remove('active');
    });
    tabTitle.forEach(tab => {
      tab.classList.remove('active');
    });
    tabContent[index].classList.add('active');
    tabTitle[index].classList.add('active');
  });
});

// Animation BG
setTimeout(function () {
  const teste = document.querySelectorAll('.vortex path');
  teste.forEach((item, index) => {
    teste[index].style.animationDelay += index * 0.1 + 's';
    console.log((teste[index].style.animationDelay += index * 0.1 + 's'));
  });
}, 500);
