//Update a form based on the input the user types or selects

const greetingDisplay = document.getElementById("greeting-display")
const recipient = document.getElementById('recipient-input')
const select = document.getElementById('greeting-select')
const sender = document.getElementById('sender-input')

function writeGreeting() {
    // Write a function update the message in the greeting-display paragraph each time the form is updated.
    if (recipient.value) {
        greetingDisplay.textContent = `
            Dear ${recipient.value}, 
            ${select.value}
        `;
    }
    if (sender.value) {
        greetingDisplay.textContent = `
            Dear ${recipient.value}, 
            ${select.value} 
            From, ${sender.value}
        `;
    }
}

recipient.addEventListener('input', writeGreeting);
select.addEventListener('change', writeGreeting);
sender.addEventListener('input', writeGreeting);
