//your JS code here. If required.
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function displayMessage() {
    const text = document.getElementById('text').value;
    const delayTime = parseInt(document.getElementById('delay').value, 10);
    if (isNaN(delayTime) || delayTime < 0) {
        alert("Please enter a valid delay time in milliseconds.");
        return;
    }
    await delay(delayTime);
    document.getElementById('output').innerText = text;
}
document.getElementById('btn').addEventListener('click', displayMessage);