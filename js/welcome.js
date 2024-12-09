document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    popup.style.display = "flex"; // Make the pop-up visible
});

// Function to close the pop-up
function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none"; // Hide the pop-up
}