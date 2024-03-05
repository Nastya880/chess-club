const promobannerButton = document.querySelector('[data-link-promobanner]');
const stagesButton = document.querySelector('[data-link-stages]');
const sectionPromobanner = document.querySelector('.promobanner');
const sectionStages = document.querySelector('.stages');

const smoothScroll = (buttonForScroll, sectionResult) => {
  buttonForScroll.addEventListener('click', function (e) {
    e.preventDefault();

    sectionResult.scrollIntoView({
      behavior: 'smooth',
    });
  });
};

smoothScroll(promobannerButton, sectionPromobanner);
smoothScroll(stagesButton, sectionStages);
