const buttonStagesPrev = document.querySelector('[data-button-stages-prev]');
const buttonStagesNext = document.querySelector('[data-button-stages-next]');
const slidesStages = document.querySelectorAll('[data-slide="stages"]');
const sliderStagesDot = document.querySelectorAll('[data-slider-stages-dot]');
const listStages = document.querySelector('.stages__list');
const tabletScreenSize = 1023;
let currentIndexSlide = 1;

const showSlides = (n) => {    
  if (n > slidesStages.length) {
    currentIndexSlide = 1;
  }
  if (n < 1) {
      currentIndexSlide = slidesStages.length;
  }

  slidesStages.forEach((slide, index) => {
    slide.classList.remove('is-visible');
    sliderStagesDot[index].classList.remove('is-active');
    slide.classList.add('is-hidden');
  })

  slidesStages[currentIndexSlide - 1].classList.remove('is-hidden');
  sliderStagesDot[currentIndexSlide - 1].classList.add('is-active');
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

    sliderStagesDot.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        dot.classList.add('is-active');
        // console.info(index);
        // currentIndexSlide = index;
        // showSlides(currentIndexSlide - 1);
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
