const hamBtn = document.getElementById("hamburger");
const expandedMenu = document.querySelector(".expanded-sidebar");
const stepsIcons = document.getElementsByClassName("stepsIcon");
let expanded = false;
const mobile = window.matchMedia("(max-width: 500px)");
const tablet = window.matchMedia("(max-width: 800px)");
const smallMonitor = window.matchMedia("(max-width: 1550px)");
let isBigScreen;

if (tablet.matches) {
    isBigScreen = false;
} else {
    isBigScreen = true;
}

if (tablet.matches) {
    setTopBar();
}

stepsIconChange();

window.addEventListener('resize', resizeChanges);

hamBtn.addEventListener("click", function(event) {
    if (expanded === false) {
        hamBtn.innerHTML = '<i class="fas fa-times"></i>';
        hamBtn.style.transform = 'scale(1.25,1.25)';
        expanded = true;
        if (tablet.matches) {
            expandedMenu.style.height = "300px";
        } else {
            if (smallMonitor.matches) {
                expandedMenu.style.width = "30%";
            } else {
                expandedMenu.style.width = "20%";
            }
        }
    } else {
        hamReset();
    }
});

function stepsIconChange() {
    if (window.matchMedia('(max-width: 800px)').matches) {
        for (let i = 0; i < stepsIcons.length; i++) {
            stepsIcons[i].innerHTML = '<i class="fas fa-chevron-circle-down"></i>';
        }
    } else {
        for (let i = 0; i < stepsIcons.length; i++) {
            stepsIcons[i].innerHTML = '<i class="fas fa-chevron-circle-right"></i>';
        }
    }
}

function hamReset() {
    hamBtn.innerHTML = '<i class="fas fa-bars"></i>';
    hamBtn.style.transform = 'scale(1.75,1)';
    expanded = false;
    if (tablet.matches) {
        expandedMenu.style.height = "0";
    } else {
        expandedMenu.style.width = "0";
    }
}

function setTopBar() {
    expandedMenu.style.width = "30%"; //change default value of width on smaller screens.
    let signInAnchor = document.createElement("a");
    signInAnchor.setAttribute("href", "https://pic-metric.netlify.com/login");
    signInAnchor.setAttribute("id", "signInAnchor");
    signInAnchor.innerText = "Sign In";
    expandedMenu.appendChild(signInAnchor);
}

function resizeChanges() {
    stepsIconChange();
    hamReset();
    if (tablet.matches && isBigScreen === true) { //When going from big screen to little screen
        expandedMenu.classList.add('no-transition');
        setTopBar();
        expandedMenu.offsetHeight; // Triggers a reflow, flushing the CSS changes
        expandedMenu.classList.remove('no-transition');
        isBigScreen = false;
    } else if (!tablet.matches && isBigScreen === false) { //When going from small screen to big screen
        expandedMenu.classList.add('no-transition');
        expandedMenu.style.height = "100%";
        let signInAnchor = document.getElementById("signInAnchor");//Remove sign in anchor tag created when
        signInAnchor.parentNode.removeChild(signInAnchor);         //switching to mobile view.
        expandedMenu.offsetHeight; // Triggers a reflow, flushing the CSS changes
        expandedMenu.classList.remove('no-transition');
        isBigScreen = true;
    }
    currentScreenWidth = window.innerWidth;
}