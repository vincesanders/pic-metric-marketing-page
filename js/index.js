const hamBtn = document.getElementById("hamburger");
const expandedMenu = document.querySelector(".expanded-sidebar");
let expanded = false;
const mobile = window.matchMedia("(max-width: 500px)");
const tablet = window.matchMedia("(max-width: 800px)");
const smallMonitor = window.matchMedia("(max-width: 1550px)");

if (tablet.matches) {
    expandedMenu.style.width = "30%"; //change default value of width on smaller screens.
    let signInAnchor = document.createElement("a");
    signInAnchor.setAttribute("href", "login.html");
    signInAnchor.innerText = "Sign In";
    expandedMenu.appendChild(signInAnchor);
}

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
        hamBtn.innerHTML = '<i class="fas fa-bars"></i>';
        hamBtn.style.transform = 'scale(1.75,1)';
        expanded = false;
        if (tablet.matches) {
            expandedMenu.style.height = "0";
        } else {
            expandedMenu.style.width = "0";
        }
    }
});