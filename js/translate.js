const locale = 'es';
const translations = {
  es: {
    'menu-home': 'Inicio',
    'menu-about': 'Nosotros',
    'menu-services': 'Servicios',
    'menu-projects': 'Proyectos',
    'menu-contact': 'Contacto',
    'home-hello': 'Hola Mundo!',
    'home-welcome': 'Bienvenidos a LionBear',
    'home-factory': `Your projects's factory`,
    'home-start': 'Empezamos',
  },
};

document.addEventListener('DOMContentLoaded', () => {
  document

    .querySelectorAll('[data-i18n-key]')

    .forEach(translateElement);
});

function translateElement(element) {
  const key = element.getAttribute('data-i18n-key');

  const translation = translations[locale][key];

  element.innerText = translation;
}
