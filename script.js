const output = document.getElementById('output');
const input = document.getElementById('input');
const submitButton = document.getElementById('submit');
let canEnterWebsite = false;

// Function to print messages to the output div
function printMessage(message) {
    output.innerHTML += `<p>${message}</p>`;
    output.scrollTop = output.scrollHeight;
}

// Function to check if user's response allows them to enter the website
function checkResponse(response) {
    if (response.toLowerCase().includes('yes')) {
        canEnterWebsite = true;
        printMessage("Great! Let's enter the website.");
        setTimeout(() => {
            window.location.href = "welcome.html"; // Redirect to the main website page
        }, 2000);
    } else {
        printMessage("Sorry, this website is only for those who don't like sport. Please come back later.");
        setTimeout(() => {
            window.location.reload(); // Reloads the page to try again
        }, 2000);
    }
}

// Event listener for submit button click
submitButton.addEventListener('click', function() {
    const response = input.value.trim();
    if (response !== '') {
        printMessage(`You: ${response}`);
        if (!canEnterWebsite) {
            checkResponse(response);
        }
        input.value = '';
    }
});

// Initial message prompting the user
printMessage("Welcome to Don't Talk Sport - Text Adventure!");
printMessage("Do you not like sport? (Type 'yes' or 'no')");
