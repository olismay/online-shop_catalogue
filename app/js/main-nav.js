let navMain = document.querySelector('.main-nav');
let toggle = document.querySelector('.toggle__open');


toggle.addEventListener('click', () => {

  if (navMain.classList.contains('main-nav__closed')) {
      navMain.classList.remove('main-nav__closed');
      navMain.classList.add('main-nav__opened');  
      toggle.classList.add('toggle__closed'); 
      toggle.classList.remove('toggle__open');
    } else {
      navMain.classList.add('main-nav__closed');
      navMain.classList.remove('main-nav__opened');
      toggle.classList.remove('toggle__closed');    
      toggle.classList.add('toggle__open');
    }
});