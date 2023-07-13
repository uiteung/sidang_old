import { TokenLogin, TokenKey, urlPost } from "./temp/config.js";
import { resetform, validateForm, validatecookies, userTable } from "./temp/table.js";
const form = document.querySelector('form');

export function PostSignUp() {
    validatecookies();
    console.log("udah di klik");
    var myHeaders = new Headers();
    myHeaders.append(TokenKey, TokenLogin);
    myHeaders.append("Content-Type", "application/json");

    var noskt = document.getElementById("nosrtskt").value;
    console.log(noskt);
    validateForm();
    
    var raw = JSON.stringify({
      "nomor": noskt
    });
    
    if (noskt === ""){
      alert("cannot post")
    }else{
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
    
      fetch(urlPost, requestOptions)
        .then(response => response.text())
        .then(result => userTable(result))
        .catch(error => console.log('error', error));
    }
    }

  resetform();

  // form.addEventListener('submit', (e) => {
  //   e.preventDefault();

  // })
