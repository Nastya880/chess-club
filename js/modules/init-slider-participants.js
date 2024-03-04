// const participants = document.querySelectorAll('.participants__item');
const participantsList = document.querySelector('.participants__list');
const buttonParticipantstLeft = document.querySelector('[data-button-participants-left]');
const buttonParticipantstRight = document.querySelector('[data-button-participants-right]');
const firstCounter = document.querySelector('[data-count-start]');
const secondCounter = document.querySelector('[data-count-end]');
const qualityParticipantst = document.querySelectorAll('.participants__item').length;
let currentIndexSlider = 0;
let autoSlideInterval;
let participantWidthPercent = 0;

const updateCounter = () => {
  firstCounter.textContent = currentIndexSlider + 1;
  secondCounter.textContent = qualityParticipantst;
}

const prevParticipant = () => {
  currentIndexSlider = (currentIndexSlider - 1 + qualityParticipantst) % qualityParticipantst;
  updateSlides();
}

const nextParticipants = () => {
  currentIndexSlider = (currentIndexSlider + 1) % qualityParticipantst;
  updateSlides();
}

const initAutoSlide = () => {
    autoSlideInterval = setInterval(() => {
        nextParticipants();
    }, 1000)
}

const updateSlides = () => {
  if (window.innerWidth <= 1023) {
    participantWidthPercent = 50;
  } else {
    participantWidthPercent = 33;
  }
  const translateValue = -currentIndexSlider * participantWidthPercent;
  participantsList.style.transform = `translateX(${translateValue}%)`;
  updateCounter();
};

buttonParticipantstRight.addEventListener('click', () => {
    nextParticipants();
    clearInterval(autoSlideInterval);
})

buttonParticipantstLeft.addEventListener('click', () => {
    prevParticipant();
    clearInterval(autoSlideInterval);
})

updateSlides();
initAutoSlide();
