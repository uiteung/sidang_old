import { TokenLogin} from "./temp/config.js";
import {  PostSignUp } from "./temp/table.js";
import { onClick } from "https://jscroot.github.io/element/croot.js";
const form = document.querySelector('form');

// export function validatecookies(){  
//   if (TokenLogin === "") {
//     window.location.replace("https://euis.ulbi.ac.id/")
//   }}

if (TokenLogin === "") {
  window.location.replace("https://euis.ulbi.ac.id");
}

onClick("button", PostSignUp);
