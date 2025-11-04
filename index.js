let homeCount = 0;
let guestCount = 0;

const homeSection = document.querySelector('#home');
const guestSection = document.querySelector('#guest');
const resetBtn = document.querySelector('.reset-btn');

homeSection.addEventListener('click', (e) => increaseScore(e, homeSection));
guestSection.addEventListener('click', (e) => increaseScore(e, guestSection));

function increaseScore(event, section) {
  const target = event.target;
  const timer = section.querySelector('.timer');
  const id = section.id;
  if (target.classList.contains('plusOne')) {
    id === 'home' ? homeCount++ : guestCount++;
  } else if (target.classList.contains('plusTwo')) {
    id === 'home' ? (homeCount += 2) : (guestCount += 2);
  } else if (target.classList.contains('plusThree')) {
    id === 'home' ? (homeCount += 3) : (guestCount += 3);
  }
  timer.textContent = id === 'home' ? homeCount : guestCount;
}

resetBtn.addEventListener('click', () => {
  homeCount = guestCount = 0;

  const timers = document.querySelectorAll('.timer');
  timers.forEach((timer) => (timer.textContent = '0'));
});
