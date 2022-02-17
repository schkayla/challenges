//fix input that has a mix of upper and lowercase letters to be title case

document.getElementById("btn").addEventListener("click", correct)

function correct() {
    // Write the JavaScript to grab the message from the paragraph and correct its capitalisation
    let text = document.getElementById('paragraph').textContent.toLowerCase();
    let textCorrect = text.split(' ').map(i => i[0].toUpperCase().concat(i.slice(1))).join(' ');
    // Render the corrected message to the DOM
    document.getElementById('paragraph').textContent = textCorrect;
}
