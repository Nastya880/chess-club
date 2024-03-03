const buttonStagesPrev = document.querySelector('[data-button-stages-prev]');
const buttonStagesNext = document.querySelector('[data-button-stages-next]');
const slidesStages = document.querySelectorAll('[data-slide="stages"]');
const tabletScreenSize = 1023;
let currentIndexSlide = 1;

const showSlides = (n) => {    
  if (n > slidesStages.length) {
    currentIndexSlide = 1
  }
  if (n < 1) {
      currentIndexSlide = slidesStages.length
  }

  slidesStages.forEach((slide) => {
    slide.classList.remove('is-visible');
    slide.classList.add('is-hidden');
  })

  slidesStages[currentIndexSlide - 1].classList.remove('is-hidden');   
  slidesStages[currentIndexSlide - 1].classList.add('is-visible');    
};

const initSliderStages = () => {
  if (slidesStages && buttonStagesNext && buttonStagesPrev && window.innerWidth < tabletScreenSize) {
    showSlides(currentIndexSlide);
    buttonStagesNext.addEventListener('click', () => {
      showSlides(currentIndexSlide += 1);
    });
    
    buttonStagesPrev.addEventListener('click', () => {
      showSlides(currentIndexSlide -= 1);
    });
  }
};

// alert(window.innerWidth)
if (window.innerWidth < tabletScreenSize) {
  initSliderStages();
}

window.addEventListener('resize', () => {
  console.info(window.innerWidth);
  if (window.innerWidth < tabletScreenSize) {
    document.querySelectorAll('.stages__item').forEach((slide), () => {
      slide.dataset.dataSlide = 'stages';
    });
    initSliderStages();
  } else if (window.innerWidth >= tabletScreenSize) {
    slidesStages.forEach((slide) => {
      slide.dataset.dataSlide = '';
      // slide.classList.add('is-hidden');
    })
  }
});
