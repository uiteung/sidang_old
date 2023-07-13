import { TokenLogin, TokenKey } from "./temp/config.js";
import { takeResponse, resetform, validateForm } from "./temp/table.js";
const form = document.querySelector('form');
// "nomor": "4381/PUS.01.01/PDPBP"
  if (!TokenLogin) {
    window.location.replace("https://euis.ulbi.ac.id/")
  }
  const formData = new FormData(form);

export function PostSignUp() {
    console.log("udah di klik")
    var myHeaders = new Headers();
    myHeaders.append(TokenKey, TokenLogin);
    myHeaders.append("Content-Type", "application/json");

    var noskt = document.getElementById("nosrtskt").value;

    validateForm();
    
    var raw = JSON.stringify({
      "nomor": noskt
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    fetch(urlPost, requestOptions)
      .then(response => response.text())
      .then(result => takeResponse(result))
      .catch(error => console.log('error', error));
  }
  resetform();

  // form.addEventListener('submit', (e) => {
  //   e.preventDefault();

  // })
