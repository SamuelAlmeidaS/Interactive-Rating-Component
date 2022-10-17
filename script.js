const mainContainer = document.querySelector('.main-container');
const rates = document.querySelectorAll('.bnt');
const rating = document.querySelector('.rating');
const thankYouContainer = document.querySelector('.thank-you');
const submit = document.querySelector('.submit');
const rateAgain = document.querySelector('.rateAgain');

submit.addEventListener("click", () => {
  thankYouContainer.classList.remove('hidden');
  mainContainer.style.display = 'none';
});


rateAgain.addEventListener("click", () => {
  thankYouContainer.classList.add('hidden');
  mainContainer.style.display = 'block';
});

rates.forEach(rate => {
    rate.addEventListener('click', ()=>{
        rating.innerHTML = rate.innerHTML;
    });
});


