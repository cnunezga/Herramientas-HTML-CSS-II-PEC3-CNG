/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
})();

/* Toggle Button Function */

const menuButtons = document.querySelectorAll('.navbar-toggler');

menuButtons.forEach((button) => {
  const mobileMenu = button.nextElementSibling;

  console.log(button);
  button.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    button.children[0].classList.toggle('text-darkBlue', !button.children[0].classList.contains('text-darkBlue'));
    button.children[0].classList.toggle('border-white', !button.children[0].classList.contains('border-white'));
  });
});