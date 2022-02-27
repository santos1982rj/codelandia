// REPLACE FEATHER ICONS
feather.replace();

// THEME Style
const toggleTheme = document.querySelector('.toggle-theme');

toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('lighttheme');
});

// MENU RESPONSIVO

const toggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.l-header__nav--list');

const navLinks = document.querySelectorAll('.l-header__nav--link');

toggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function () {
    navList.classList.toggle('active');
  });
}

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
  });
}, 500);

// SCROLL top

const scrollTop = document.querySelector('.scroll-top');

scrollTop.addEventListener('click', () => {
  window.scrollTo(0, 0);
});
