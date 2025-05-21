import { registeration, getName } from "./menu.js";

// global variables
var userName = "";

registeration();
$(".game").on("click", ".btn-name", () => userName = getName());


