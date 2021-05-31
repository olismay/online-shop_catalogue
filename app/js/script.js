let email = document.querySelector('#email');
let form = document.querySelector('.form');
let error = document.querySelector('.form__error');
let overlay = document.querySelector('.overlay');
let buttonUp = document.querySelector('.navigation__button');
let buttonLike = document.querySelectorAll('.items__button');
let like = document.querySelectorAll('.items__svg-icon');
let notice = document.querySelector('.info');
let price = document.querySelectorAll('.items__price');
let priceArr = [...price];
let priceFilter = document.querySelector('#price');
let ageFilter = document.querySelector('#age');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    let reg = /\w+@\w+\.\w{2,20}/gi;
    
    if(!email.value) {
        email.style.border = '1px solid red';
        error.innerHTML = 'Заполните это поле';
        return false;
    }
    
    if(!reg.test(email.value)) {
        email.style.border = '1px solid red';
        error.innerHTML = 'Введите корректный email';
        return false;
    }   
        form.reset();
        overlay.style.display = 'block'; 
        window.addEventListener('click', (e) => {
            e.target === overlay ? overlay.style.display = 'none' : null;
        });
});

const scrollUp = () => {
    window.scrollTo({ top: 0,
                      left: 0,
                      behavior: "smooth"});
}

buttonUp.addEventListener('click', scrollUp);


buttonLike.forEach( item => {
    item.addEventListener( 'click', (e) => {
       e.target.classList.add('items__svg-icon--pressed');
     
       notice.style.display = 'block';

       window.addEventListener( 'click', (e) => {
           e.target === notice ? notice.style.display = 'none' : null;
       });       
    });
});


priceFilter.addEventListener('click', () => {
  const elements = document.querySelectorAll('.items__card');
  const sorted = [...elements].sort((a, b) => {
    const priceElA = a.querySelector('.items__price');
    const priceElB = b.querySelector('.items__price');
    const getPrice = (el) => parseInt(el.innerHTML.replace(/ /g, ""));
    return getPrice(priceElA) - getPrice(priceElB);
  });
  const resultEl = document.querySelector('.container');
  sorted.forEach(el => resultEl.appendChild(el));
});

ageFilter.addEventListener('click', () => {
  const elements = document.querySelectorAll('.items__card');
  const sorted = [...elements].sort((a, b) => {
    const priceElA = a.querySelector('.items__feature-desc');
    const priceElB = b.querySelector('.items__feature-desc');
    const getPrice = (el) => parseInt(el.innerHTML.replace(/ /g, ""));
    return getPrice(priceElA) - getPrice(priceElB);
  });
  const resultEl = document.querySelector('.container');
  sorted.forEach(el => resultEl.appendChild(el));
});