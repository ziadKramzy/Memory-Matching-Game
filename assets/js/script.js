import { registeration, getName } from "./menu.js";
import { startgamemenu, aboutOverlay } from "./mainmenu.js";
import { changeBG } from "./background.js";
import showSoundOverlay from "./sounds.js";
import { mainmenu } from "./mainmenu.js";
import { gamePage } from "./game.js";


// global variables
var userName = "";

registeration();
$(".game").on("click", ".btn-name", () => userName = getName());
$(".game").on("click", ".start-game", startgamemenu);
$(".game").on("click", ".exit", registeration);
$(".game").on("click", ".background-btn", changeBG);
$(".game").on("click", ".sound",  showSoundOverlay);
$(".game").on("click", ".about-btn", aboutOverlay);
$(".game").on("click", ".back", () => mainmenu(userName));
$(".game").on("click", ".render-page", gamePage)






