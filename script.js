function startInteraction() {
  document.getElementById('startScreen').classList.add('hidden');
  document.getElementById('step1').classList.remove('hidden');
}

function goToStep(stepNumber) {
  const currentStep = document.querySelector('.step:not(.hidden)');
  const nextStep = document.getElementById('step' + stepNumber);
  currentStep.classList.add('hidden');
  nextStep.classList.remove('hidden');
  if (stepNumber === 2) {
    const name = document.getElementById('nameInput').value;
    document.getElementById('userName').textContent = name;
    document.getElementById('userName2').textContent = name;
    document.getElementById('userName3').textContent = name;
    document.getElementById('userName4').textContent = name;
  }
  if (stepNumber >= 2 && stepNumber <= 6) {
    startTypingAnimation(document.querySelector('#step' + stepNumber + ' .typing'));
  }
}

function checkStatus(isGood) {
  if (isGood) {
    goToStep(4);
  } else {
    goToStep(3);
  }
}

function meetUp(isYes) {
  if (isYes) {
    goToStep(7);
  } else {
    alert('Tidak apa-apa, kita bisa bertemu nanti.');
  }
}

function sendLocation() {
  const location = document.getElementById('locationInput').value;
  const userName = document.getElementById('nameInput').value;
  const whatsappLink = `https://wa.me/6283861995160?text=Hai ${userName}, aku pilih lokasi ini: ${location}`;
  window.open(whatsappLink, '_blank');
}

function startTypingAnimation(element) {
  const text = element.textContent;
  element.textContent = '';
  let i = 0;
  const typingSpeed = 50;
  const interval = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, typingSpeed);
}

const audio = document.getElementById('myAudio');
const playButton = document.getElementById('playButton');

function toggleAudio() {
  if (audio.paused) {
    audio.play();
    playButton.textContent = 'Berhenti';
  } else {
    audio.pause();
    audio.currentTime = 0;
    playButton.textContent = 'Putar Audio';
  }
}