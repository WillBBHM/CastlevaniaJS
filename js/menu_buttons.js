

//////*  Sounds   *//////
var silentAudio = new Audio("data:audio/mp3;base64,//MkxAA........");

var hoverSound = new Audio("https://github.com/Viet281101/CastlevaniaJS/blob/main/assets/Sound/btn_hover.wav?raw=true");
var clickSound = new Audio("https://github.com/Viet281101/CastlevaniaJS/blob/main/assets/Sound/btn_click.wav?raw=true");


//////*  Start button   *//////
document.getElementById('startButton').addEventListener('click', function () {
    silentAudio.play().catch(function(error) {
        console.log('Autoplay prevented for silent audio. Initiating playback on user action.');
    });
    window.location.assign('game.html');
    clickSound.play();
});


//////*  Settings button   *//////
document.getElementById('settingButton').addEventListener('click', function () {
    clickSound.play();

});


//////*  Credits button   *//////
document.getElementById('creditButton').addEventListener('click', function () {
    clickSound.play();

});


//////*  Quit button   *//////
document.getElementById('quitButton').addEventListener('click', function () {
    clickSound.play();
    if (confirm("Are you sure you want to quit?")) {
        try {
            window.close();
        } catch (e) {
            alert("You can't close this window! Please close the browser tab instead.");
        }
    }
});


//////*  About buttons   *//////
document.addEventListener("DOMContentLoaded", function () {

    const menuButtons = document.querySelectorAll(".menuButton");

    menuButtons.forEach(function (button) {
        let textSize = parseInt(window.getComputedStyle(button).fontSize);
        let textSizeHover = textSize + (textSize * 0.1);

        button.addEventListener("mouseover", function () {
            button.style.fontSize = textSizeHover + "px";
            button.style.textShadow = "0 0 10px #f6f2ff";
            button.setAttribute('title', button.textContent);
            hoverSound.play();
        });

        button.addEventListener("mouseout", function () {
            button.style.fontSize = textSize + "px";
            button.style.textShadow = "none";
        });
    });
});


//////*  Disable menu interaction   *//////
function disableMenuInteraction() {
    var menuButtons = document.querySelectorAll(".menuButton");
    menuButtons.forEach(function (button) {
        button.classList.add("disable-interaction");
    });
};

function enableMenuInteraction() {
    var menuButtons = document.querySelectorAll(".menuButton");
    menuButtons.forEach(function (button) {
        button.classList.remove("disable-interaction");
    });
};

disableMenuInteraction();
setTimeout(function () {
    enableMenuInteraction();
}, 4500);


//////*  Remove intro element   *//////
document.addEventListener('DOMContentLoaded', function() {
    var introElement = document.querySelector('.intro-background');
    if (introElement) {
        introElement.addEventListener('animationend', removeIntroElement);
    }
});

function removeIntroElement() {
    var introElement = document.querySelector('.intro-background');
    if (introElement) {
        introElement.parentNode.removeChild(introElement);
        // Or introElement.style.display = 'none';
    }
};

