const sections = document.querySelectorAll('section.section');
const logo = document.querySelector('.logo-container');
const labelMenu = document.querySelector('label.menu');
const menuButtonsContainer = document.querySelector('div.menu-buttons-container');
const themeSwitcher = document.querySelector('div.menu-buttons-container label.darkmode-button-container');

console.log("Secciones detectadas:", sections);

// const lightColor = 'rgb(248, 243, 217)';
// const lightColor2 = 'rgb(63, 79, 68)';
// const foregroundBrownColor = 'rgb(80, 75, 56)';
// const darkColor = 'rgb(107, 91, 149)';
// const darkColor2 = 'rgb(53, 92, 125)';

const observerOptions = {
    root: null,
    threshold: 0.3
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
        const id = entry.target.id;

        console.log("Sección visible:", id);
        console.log("Sección visible:", entry.target.classList);

        if(entry.target.classList.contains('light-section')) {
            labelMenu.classList.add('brown-color');
            labelMenu.classList.remove('light-color');

            menuButtonsContainer.classList.add('brown-color');
            menuButtonsContainer.classList.remove('light-color');
        } else if(entry.target.classList.contains('dark-section')) {
            labelMenu.classList.add('light-color');
            labelMenu.classList.remove('brown-color');

            menuButtonsContainer.classList.add('light-color');
            menuButtonsContainer.classList.remove('brown-color');
        }

        if(id == 'home' || id == 'last-part') {
            logo.classList.add('hidden');        
        } else {
            logo.classList.remove('hidden');
        }
    }
  });
}, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});