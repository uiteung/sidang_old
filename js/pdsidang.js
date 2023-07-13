import { TokenLogin } from "./temp/config.js";
import { PostSignUp, resetform } from "./temp/table.js";
const form = document.querySelector('form');
// "nomor": "4381/PUS.01.01/PDPBP"
  if (!TokenLogin) {
    window.location.replace("https://euis.ulbi.ac.id/")
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    PostSignUp(formData);
    resetform();
  })
