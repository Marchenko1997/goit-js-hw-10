
let userSelectedDate;


import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast/dist/js/iziToast.min.js";
import "izitoast/dist/css/iziToast.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
  
    userSelectedDate = selectedDates[0];
    const currentDate = new Date();
    const startBtn = document.querySelector('[data-start]');
    
    
    if (userSelectedDate > currentDate) {
     
      startBtn.removeAttribute('disabled');
    } else {
    
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
      startBtn.setAttribute('disabled', true);
    }
  },
};

flatpickr("#datetime-picker", options);

const currentDate = new Date();
if (!userSelectedDate || userSelectedDate <= currentDate) {
  const startBtn = document.querySelector('[data-start]');
  startBtn.setAttribute('disabled', true);
}

let countdownTimer;
let targetDate;

function updateTimer() {
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

  if (timeDifference > 0) {
    const { days, hours, minutes, seconds } = convertMs(timeDifference);

    document.querySelector('[data-days]').textContent = addLeadingZero(days);
    document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
    document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
    document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
  } else {
 
    clearInterval(countdownTimer);
    iziToast.success({
      title: 'Success',
      message: 'Countdown finished!',
    });
  }
}

document.querySelector('[data-start]').addEventListener('click', () => {

  targetDate = userSelectedDate;

 
  countdownTimer = setInterval(updateTimer, 1000);

  document.querySelector('[data-start]').setAttribute('disabled', true);
});


function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
