import { registeration, getName } from "./menu.js";
import { startgamemenu } from "./mainmenu.js";
import { changeBG } from "./background.js";
import showSoundOverlay from "./sounds.js";

// global variables
var userName = "";

registeration();
$(".game").on("click", ".btn-name", () => userName = getName());
$(".game").on("click", ".start-game", startgamemenu);
$(".game").on("click", ".exit", registeration);
$(".game").on("click", ".background-btn", changeBG);
$(".game").on("click", ".sound",  showSoundOverlay);




