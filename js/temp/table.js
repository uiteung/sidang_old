import { TokenKey, TokenLogin, urlPost, rowtabel } from "../temp/config.js";
import { addInner } from "https://jscroot.github.io/element/croot.js";

export function PostSignUp() {
    var myHeaders = new Headers();
    myHeaders.append(TokenKey, TokenLogin);
    myHeaders.append("Content-Type", "application/json");

    var noskt = document.getElementById("nosrtskt").value;
    
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

export function resetform(){
    document.getElementById('form').reset();
  }

function takeResponse(result){
    // console.log(result)
    // console.log(result.nama)
    userTable(result)
}

export function userTable(response){
    let json = JSON.parse(response)
    let row = '';
        row = rowtabel.replace("#npm#", json.npm).
        replace("#nama#", json.nama).
        replace("#penguji#", json.penguji).
        replace("#pembimbing#", json.pembimbing);
    addInner("responsetab",row);
}