const contactForm = document.getElementById('contact-form');
const customAlert = document.getElementById('custom-alert');
const alertMessage = document.getElementById('alert-message');
const closeAlertButton = document.getElementById('close-alert');

function showAlert(message) {
  alertMessage.textContent = message; 
  customAlert.classList.remove('hidden'); 
}

// Hide the custom alert
closeAlertButton.addEventListener('click', function() {
  customAlert.classList.add('hidden'); 
});

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    showAlert(`Thank you, ${name}! We have received your message.`);
    contactForm.reset(); 
  } else {
    showAlert('Please fill out all fields before submitting.');
  }
})


const myDiv = document.getElementById('myDiv');
const toggleButton = document.getElementById('toggleButton');
const toggleCountDisplay = document.getElementById('toggleCount');
let toggleCount = 0;

function toggleDiv() {
  myDiv.classList.toggle('hidden');
  myDiv.classList.toggle('active');

  if (myDiv.classList.contains('hidden')) {
    toggleButton.textContent = 'Show Div';
  } else {
    toggleButton.textContent = 'Hide Div';
  }

  toggleCount++;
  toggleCountDisplay.textContent = `Toggle Count: ${toggleCount}`;
};
