// Definição das funções do slider
const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'));
}

function showSlider() {
  slider[currentSlide].classList.add('on');
}

function nextSlider() {
  hideSlider();
  if (currentSlide === slider.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlider();
}

function prevSlider() {
  hideSlider();
  if (currentSlide === 0) {
    currentSlide = slider.length - 1;
  } else {
    currentSlide--;
  }
  showSlider();
}

btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);

// Adicionar um ouvinte de eventos para o clique em look1
const look1 = document.getElementById('look1');
look1.addEventListener('click', nextSlider);


// Js Notifications
const likeButtons = document.querySelectorAll(".lookrate");

likeButtons.forEach(button => {
    button.addEventListener('click', () => {

    });
});

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';

    const checkIcon = document.getElementById('checkIcon').cloneNode(true);
    checkIcon.style.display = 'block';
    notification.appendChild(checkIcon);

    const text = document.createElement('div');
    text.className = 'notification-message';
    text.textContent = message;
    notification.appendChild(text);

    const notifications = document.querySelectorAll('.notification');
    notifications.forEach((n) => {
        n.style.transition = 'transform 1s cubic-bezier(0.21, 1.02, 0.73, 1)';
    });

    let verticalOffset = 0;
    notifications.forEach((n) => {
        n.style.transform = `translate3d(0, ${verticalOffset}px, 0)`;
        verticalOffset += n.offsetHeight + 8;
    });

    const container = document.getElementById('notificationContainer');
    container.insertBefore(notification, container.firstChild);

    notification.style.transform = `translate3d(0, ${verticalOffset}px, 0)`;
    notification.style.animation = 'slideIn 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) 0s 1 normal forwards';

    notification.addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.5s cubic-bezier(0.15, 0.69, 0.33, 1.75) 0s 1 normal forwards';

        notification.addEventListener('animationend', () => {
            notification.remove();
        });
    });

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s cubic-bezier(0.15, 0.69, 0.33, 1.75) 0s 1 normal forwards';

        notification.addEventListener('animationend', () => {
            notification.remove();
        });
    }, 2000);
    
    setTimeout(() => {
        checkIcon.style.transform = 'scale(1)';
    }, 10);
}
