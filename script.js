//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function () {
    const text = document.getElementById("text").value;
    const delay = parseInt(document.getElementById("delay").value, 10);
    const outputDiv = document.getElementById("output");
    // Validate input
    if (!text) {
        outputDiv.innerText = "Please enter a message.";
        return;
    }
    if (isNaN(delay) || delay < 0) {
        outputDiv.innerText = "Please enter a valid delay in milliseconds.";
        return;
    }
    outputDiv.innerText = "Waiting...";
    await new Promise(resolve => setTimeout(resolve, delay));
    
    outputDiv.innerText = text;
});