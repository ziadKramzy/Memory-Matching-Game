import { registeration, getName } from "./menu.js";
import { startgamemenu } from "./mainmenu.js";

// global variables
var userName = "";

registeration();
$(".game").on("click", ".btn-name", () => userName = getName());
$(".game").on("click", ".start-game", startgamemenu);
$(".game").on("click", ".exit", registeration);



