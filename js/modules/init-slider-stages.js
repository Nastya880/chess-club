const buttonStagesPrev = document.querySelector('[data-button-stages-prev]');
const buttonStagesNext = document.querySelector('[data-button-stages-next]');
const slidesStages = document.querySelectorAll('[data-slide="stages"]');
const sliderStagesDot = document.querySelectorAll('[data-slider-stages-dot]');
const listStages = document.querySelector('.stages__list');
const tabletScreenSize = 1023;
let currentIndexSlide = 1;

const showSlides = (n) => {    
  if (n >= 1 && n <= slidesStages.length) {
    slidesStages.forEach((slide, index) => {
      slide.classList.remove('is-visible');
      sliderStagesDot[index].classList.remove('is-active');
      slide.classList.add('is-hidden');
    })
  
    slidesStages[currentIndexSlide - 1].classList.remove('is-hidden');
    sliderStagesDot[currentIndexSlide - 1].classList.add('is-active');
    slidesStages[currentIndexSlide - 1].classList.add('is-visible'); 
  }   
};

const iniButtonDisabled = (currentIndex) => {
  if (currentIndex <= 1) {
    buttonStagesPrev.classList.add('is-disabled');
    buttonStagesNext.classList.remove('is-disabled');
  } else if (currentIndex !== slidesStages.length) {
    buttonStagesPrev.classList.remove('is-disabled');
    buttonStagesNext.classList.remove('is-disabled');
  } else if (currentIndex >= slidesStages.length - 1) {
    buttonStagesPrev.classList.remove('is-disabled');
    buttonStagesNext.classList.add('is-disabled');
  } else {
    buttonStagesPrev.classList.remove('is-disabled');
    buttonStagesNext.classList.remove('is-disabled');
  }
}

const initSliderStages = () => {
  if (slidesStages && buttonStagesNext && buttonStagesPrev && window.innerWidth < tabletScreenSize) {
    showSlides(currentIndexSlide);

    buttonStagesNext.addEventListener('click', () => {
      showSlides(currentIndexSlide += 1);
      iniButtonDisabled(currentIndexSlide);
    });
    
    buttonStagesPrev.addEventListener('click', () => {
      showSlides(currentIndexSlide -= 1);
      iniButtonDisabled(currentIndexSlide);
    });

    sliderStagesDot.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        dot.classList.add('is-active');
        showSlides(currentIndexSlide = index + 1);
        iniButtonDisabled(currentIndexSlide);
      })
    });
  }
};

if (window.innerWidth < tabletScreenSize) {
  initSliderStages();
}

window.addEventListener('resize', () => {
  console.info(window.innerWidth);
  if (window.innerWidth < tabletScreenSize) {
    listStages.classList.remove('is-no-clider');
    initSliderStages();
  } else if (window.innerWidth >= tabletScreenSize) {
    slidesStages.forEach((slide) => {
      slide.classList.remove('is-hidden');
      slide.classList.add('is-visible');
    });
    listStages.classList.add('is-no-clider');
  }
});
