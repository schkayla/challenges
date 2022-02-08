//calculating how many days old from an calendar entry on a form

const container = document.querySelector('.container')
const dob = document.querySelector('[type="date"]');
const button = document.querySelector('button');

let newDiv = false;
const answer = document.createElement('div');

button.addEventListener('click', () => {
    if (newDiv) {
        container.removeChild(answer);
    }

    let birthDate = new Date(dob.value);
    let todaysDate = new Date();
    let daysOld = Math.floor((todaysDate - birthDate) / 1000 / 60 / 60 / 24);
   
    container.appendChild(answer);
    answer.textContent = `You are ${daysOld} days old today`;
    newDiv = true;
})
