(function () {
  // Change this to the URL where the button should redirect (your memory site or any link)
  const REDIRECT_URL = 'https://mysite-9j0n.onrender.com/';

  const countdownSection = document.getElementById('countdownSection');
  const revealSection = document.getElementById('revealSection');
  const midnightNote = document.getElementById('midnightNote');
  const elHours = document.getElementById('hours');
  const elMinutes = document.getElementById('minutes');
  const elSeconds = document.getElementById('seconds');
  const magicButton = document.getElementById('magicButton');

  // Testing: open page with ?test=1 to show the button immediately (e.g. index.html?test=1)
  const isTestMode = /[?&]test=1/.test(window.location.search);
  if (isTestMode) {
    countdownSection.classList.add('hidden');
    countdownSection.style.display = 'none';
    revealSection.classList.remove('hidden');
    revealSection.classList.add('visible');
    magicButton.href = REDIRECT_URL;
    magicButton.setAttribute('target', '_blank');
    return;
  }

  function getNextMidnight() {
    const now = new Date();
    const next = new Date(now);
    next.setHours(24, 0, 0, 0);
    return next;
  }

  function pad(n) {
    return String(Math.max(0, Math.floor(n))).padStart(2, '0');
  }

  function updateCountdown() {
    const now = new Date();
    const next = getNextMidnight();
    const diff = next - now;

    if (diff <= 0) {
      elHours.textContent = '00';
      elMinutes.textContent = '00';
      elSeconds.textContent = '00';
      countdownSection.classList.add('hidden');
      countdownSection.style.display = 'none';
      revealSection.classList.remove('hidden');
      revealSection.classList.add('visible');
      return true;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const hours = totalSeconds / 3600;
    const minutes = (totalSeconds % 3600) / 60;
    const seconds = totalSeconds % 60;

    elHours.textContent = pad(hours);
    elMinutes.textContent = pad(minutes);
    elSeconds.textContent = pad(seconds);

    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    midnightNote.textContent = 'Until 12:00 AM • ' + next.toLocaleDateString('en-US', options);
    return false;
  }

  if (updateCountdown()) {
    return;
  }

  const t = setInterval(function () {
    if (updateCountdown()) {
      clearInterval(t);
    }
  }, 1000);

  magicButton.href = REDIRECT_URL;
  magicButton.setAttribute('target', '_blank');
})();
