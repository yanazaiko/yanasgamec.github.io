let userScore = 0;
let computerScore = 0;
let userName = '';


window.onload = function() {
    document.getElementById("username-modal").style.display = "flex";
};


function setUsername() {
    const input = document.getElementById("username-input").value.trim();
    userName = input || "player"; 
    document.getElementById("user-name").textContent = userName;
    document.getElementById("username-modal").style.display = "none";
}


function generateNumbers() {
    if (userScore >= 3 || computerScore >= 3) {
        displayWinner();
        return;
    }

    const userNumber = Math.floor(Math.random() * 6) + 1;
    const computerNumber = Math.floor(Math.random() * 6) + 1;

    document.getElementById('user-number').textContent = userNumber;
    document.getElementById('computer-number').textContent = computerNumber;

    if (userNumber > computerNumber) {
        userScore++;
        document.getElementById('user-points').textContent = userScore;
    } else if (computerNumber > userNumber) {
        computerScore++;
        document.getElementById('computer-points').textContent = computerScore;
    }

    if (userScore >= 3 || computerScore >= 3) {
        displayWinner();
    }
}


function displayWinner() {
    const message = document.getElementById("message");
    if (userScore >= 3) {
        message.textContent = `Congrate! ${userName}! You won! 🎉`;
    } else if (computerScore >= 3) {
        message.textContent = "You lose :(";
    }
    document.querySelector(".generate").disabled = true;
}
