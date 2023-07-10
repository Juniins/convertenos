const autoplayItem = document.getElementById('autoplay');
const toggleIcon = autoplayItem.querySelector('.toggle-icon');

let isAutoplayEnabled = false;

autoplayItem.addEventListener('click', function () {
  isAutoplayEnabled = !isAutoplayEnabled;

  if (isAutoplayEnabled) {
    autoplayItem.classList.add('active');
    toggleIcon.classList.remove('fa-toggle-off');
    toggleIcon.classList.add('fa-toggle-on');
  } else {
    autoplayItem.classList.remove('active');
    toggleIcon.classList.remove('fa-toggle-on');
    toggleIcon.classList.add('fa-toggle-off');
  }
});

const profileItem = document.getElementById('profile');
const profileIcon = profileItem.querySelector('.profile-icon');
const faqBox = document.querySelector('.faq-box');

let isProfileOpen = false;

profileItem.addEventListener('click', function () {
  isProfileOpen = !isProfileOpen;

  if (isProfileOpen) {
    profileItem.classList.add('active');
    profileIcon.style.transform = 'rotate(180deg)';
    faqBox.style.display = 'block';
  } else {
    profileItem.classList.remove('active');
    profileIcon.style.transform = 'rotate(0deg)';
    faqBox.style.display = 'none';
  }
});

const embedButton = document.getElementById('embed-button');

function showCopySuccessMessage() {
  const copySuccessMessage = document.createElement('div');
  copySuccessMessage.textContent = 'URL para incorporar copiada com sucesso';
  copySuccessMessage.classList.add('copy-success-message');
  document.body.appendChild(copySuccessMessage);

  setTimeout(function () {
    copySuccessMessage.style.transform = 'translateY(-100%)';
    copySuccessMessage.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
    copySuccessMessage.style.opacity = '0';
  }, 2000);

  setTimeout(function () {
    document.body.removeChild(copySuccessMessage);
  }, 2500);
}

embedButton.addEventListener('click', function () {
  const iframeSrc = document.querySelector('iframe').src;
  navigator.clipboard.writeText(iframeSrc)
    .then(function () {
      showCopySuccessMessage();
    })
    .catch(function (error) {
      console.error('Erro ao copiar a URL:', error);
    });

  const copySuccessMessage = document.querySelector('.copy-success-message');
  copySuccessMessage.style.display = 'block';
});
