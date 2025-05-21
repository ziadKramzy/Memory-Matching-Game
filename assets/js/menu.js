export function registeration() {
    $(".game").html(`
        <h1 class="typewrite" data-text="MARVEL"></h1>
        <h2 class="typewrite" data-text="Memory Matching Game"></h2>
        <menu class="main-menu">
            <label for="input-name" class="input-label">Enter Your Name:</label> 
            <input type="text" id="input-name">
            <p class="p-name">Please enter correct name</p>
            <button class="main-menu-btn btn-name">Enter</button>
        </menu>`);
    // call type all here
}

export function getName() {
    var userName = $("#input-name").val()
    if (userName.length == 0) {
        $(".p-name").css("opacity", 1);
    } else { 
        $(".p-name").css("opacity", 0);
        $(".game").html(``);                    // call main menu here
        return userName;
    }
}

// write typeall here