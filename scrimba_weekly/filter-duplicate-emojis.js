document.getElementById("btn").addEventListener("click", filterDuplicates)

const emojis = [
    "💘","💘","🌞","🧡","🍇",
    "🧁","⚡️","💝","🐱","💘",
    "🧡","💫","🍓","💜","⚡️",
    "⚡️","🐶","💘","🍇","🐱",
    "💘","💫","🍓","💜","💕",
    "⚡️","💘","🌞","🐱","💘",
    "💫","🍓","💜","⚡️","🧡",
    "💕","🍇","💘"
    ]
    
const allEmojisP = document.getElementById("all-emojis-p")
const uniqueEmojisP = document.getElementById("unique-emojis-p")

for (let emoji of emojis) {
    allEmojisP.textContent += emoji
}

function filterDuplicates() {
    // 1. Filter out all duplicate emojis, leaving only one of each emoji.
    let filteredEmojis = emojis.sort().filter((val, i) => emojis.indexOf(val) === i)
    // 2. Render the unique emojis in uniqueEmojisP.
    uniqueEmojisP.textContent = filteredEmojis;
}
