const sendButton = document.querySelector('#submit-btn');
const imageAgreement = document.querySelector('#agreement');

sendButton.addEventListener('click', (event) => {
  event.preventDefault();
});

imageAgreement.addEventListener('change', () => {
  if (imageAgreement.checked) {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
});
