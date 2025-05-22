import {typeAll} from "./menu.js"

export function mainmenu(userName) {
    $(".game").html(`
        <h1 class="typewrite" data-text="MARVEL"></h1>
        <h2 class="typewrite" data-text="Memory Matching Game"></h2>
        <h5 class="typewrite" data-text="Welcome ${userName}"></h5>
        <menu class="main-menu">
            <button class="main-menu-btn start-game">Start Game</button>
            <button class="main-menu-btn sound">Sound</button>
            <button class="main-menu-btn background-btn">Background</button>
            <button class="main-menu-btn">About</button>
            <button class="main-menu-btn leaderboard">Leaderboard</button>
            <button class="main-menu-btn exit">Exit</button>
        </menu>`);
    typeAll()
}

// level menu function
export function startgamemenu() {
    $(".game").html(`
        <menu class="main-menu">
            <button class="main-menu-btn render-page">Easy</button>
            <button class="main-menu-btn render-page">Normal</button>
            <button class="main-menu-btn render-page">Difficult</button>
            <button class="main-menu-btn back">Back</button>
        </menu>`);
}
