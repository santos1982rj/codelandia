// REPLACE FEATHER ICONS
feather.replace();

// MENU RESPONSIVO

// const toggle = document.getElementById('toggle');
// const navList = document.querySelector('.navbar__list');

// toggle.addEventListener('click', () => {
//   navList.classList.toggle('active');
// });

//Tabs

const tabTitle = document.querySelectorAll('.tabs h3');
const tabContent = document.querySelectorAll('.tab-content--item');

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
