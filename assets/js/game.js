import { renderPage, startTimer, resetTimer } from "./render.js";
import { mainmenu, startgamemenu } from "./mainmenu.js";

let moves = 0;
var cardsImages = [
    "./assets/images/altron.jpg",
    "./assets/images/blackwidow.jpg",
    "./assets/images/bucky.jpg",
    "./assets/images/cap.jpg",
    "./assets/images/DD.jpg",
    "./assets/images/deadpool.jpg",
    "./assets/images/doom.jpg",
    "./assets/images/drax.png",
    "./assets/images/dr-strange.jpg",
    "./assets/images/fury.jpg",
    "./assets/images/groot.jpg",
    "./assets/images/hawkeye.jpg",
    "./assets/images/hulk.jpg",
    "./assets/images/ironfist.jpg",
    "./assets/images/ironman.jpeg",
    "./assets/images/loki.jpg",
    "./assets/images/mysc.jpg",
    "./assets/images/panther.png",
    "./assets/images/punisher.png",
    "./assets/images/quicksilver.jpg",
    "./assets/images/reed.jpg",
    "./assets/images/rocket.jpg",
    "./assets/images/spidy.png",
    "./assets/images/starlord.jpg",
    "./assets/images/storm.jpg",
    "./assets/images/thanos.jpg",
    "./assets/images/thing.jpg",
    "./assets/images/thor.jpg",
    "./assets/images/torch.jpg",
    "./assets/images/venom.jpg",
    "./assets/images/wanda.jpg",
    "./assets/images/wolvrine.jpg",
];

// game page function
export function gamePage(level, userName) {
    $(".game").html('')
    $(".game").html(`<div class="nav-bar">
                            <div class="moves-display main-menu-btn">Moves: ${moves}</div>
                            <div class="timer-display main-menu-btn">Time: 00:00</div>
                            <div class="burger-icon" onclick="toggleBurger()">
                              <div></div>
                              <div></div>
                              <div></div>
                              </div>
                     </div>

                     <div class="burger-menu" id="burgerMenu">
                            <div class="sidebar-btn main-menu-btn main-menu-btn-sidebar restart-btn1 restart-btn">
                              <i class="fas fa-rotate-right"></i>
                              <span>Restart</span>
                            </div>
                            <div class="sidebar-btn main-menu-btn main-menu-btn-sidebar back-to-level back-level">
                              <i class="fas fa-signal"></i>
                              <span>Level Selection</span>
                            </div>
                            <div class="sidebar-btn main-menu-btn main-menu-btn-sidebar back-to-menu back-menu">
                              <i class="fas fa-arrow-left"></i>
                              <span>Back to Menu</span>
                            </div>
                            <div class="sidebar-btn main-menu-btn main-menu-btn-sidebar sound sound-in-game">
                              <i class="fas fa-volume-up"></i>
                              <span>Sound</span>
                            </div>
                      </div>
                      <div class="game-body"></div>`);
    $(".back-to-menu").on("click", () => mainmenu(userName));
    $(".back-to-level").on("click", () => startgamemenu());
    // level = $(this).text();
    console.log(level)
    let  imageParameter;
    if (level === "Easy") {
        imageParameter = cardsImages.sort(() => Math.random() - 0.5).slice(0, 8);
    } else if (level === "Normal") {
        imageParameter = cardsImages.sort(() => Math.random() - 0.5).slice(0, 18);
    } else if (level === "Difficult") {
        imageParameter = cardsImages;
    }
    console.log(imageParameter)
    $(".restart-btn").on("click", function () {
        resetTimer();
        startTimer();
        renderPage(level, imageParameter, userName);
    });
    // Render the game
    console.log(imageParameter);
    renderPage(level, imageParameter, userName);
}