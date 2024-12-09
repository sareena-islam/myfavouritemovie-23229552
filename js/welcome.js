document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    popup.style.display = "flex"; // Make the pop-up visible
});

// Function to close the pop-up
function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none"; // Hide the pop-up
}

function checkGuess() {
    const favoriteCharacter = "Ironman"; // Set your favorite character here
    const userGuess = document.getElementById("guess-input").value.trim();
    
    if (userGuess.toLowerCase() === favoriteCharacter.toLowerCase()) {
        alert("Success! You guessed my favorite character.");
    } else {
        alert("Wrong! Try again.");
    }
}