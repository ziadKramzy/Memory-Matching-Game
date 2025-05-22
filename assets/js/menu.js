import { mainmenu } from "./mainmenu.js";

export function registeration() {
    $(".game").html(`
        <h1 class="typewrite" data-text="MARVEL"></h1>
        <h2 class="typewrite" data-text="Memory Matching Game"></h2>
        <menu class="main-menu about-content">
            <label for="input-name" class="input-label" >Enter Your Name:</label> 
            <input type="text" id="input-name">
            <p class="p-name">Please enter correct name</p>
            <button class="main-menu-btn btn-name">Enter</button>
        </menu>`);
    typeAll();
}

export function getName() {
    var userName = $("#input-name").val()
    if (userName.length == 0) {
        $(".p-name").css("opacity", 1);
    } else { 
        $(".p-name").css("opacity", 0);
        mainmenu(userName);                             // call main menu here
        return userName;
    }
}

// write typeall here
export function typeAll() {
    const elements = document.querySelectorAll('.typewrite');
    let delay = 0;
    elements.forEach(el => {
        el.textContent = "";
        const text = el.getAttribute('data-text');
        setTimeout(() => typeWriter(el, text, 0), delay);
        delay += text.length * 80 + 500; // adjust speed and pause between lines
    });
}

function typeWriter(element, text, i) {
    if (i < text.length) {
        element.textContent += text.charAt(i);
        setTimeout(() => typeWriter(element, text, i + 1), 80);
    }
}