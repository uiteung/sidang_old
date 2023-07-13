import { TokenKey, TokenLogin, urlPost, rowtabel } from "../temp/config.js";
import { addInner } from "https://jscroot.github.io/element/croot.js";



export function resetform(){
    document.getElementById('form').reset();
  }

function takeResponse(result){
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

export function validateForm() {
  var noskt = document.getElementById("nosrtskt").value;
  
  if (noskt === "") {
    alert("Nomor SKT harus diisi");
    return false;
  }
  return true;
}