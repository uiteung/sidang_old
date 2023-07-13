import { rowtabel, TokenLogin,TokenKey } from "../temp/config.js";
import { addInner, setInner } from "https://jscroot.github.io/element/croot.js";

export function resetform(){
    document.getElementById('form').reset();
  }

// export function takeResponse(result){
//     console.log(result)
//     if (result === null){
//       alert("kamu bukan mahasiswa ta")
//     }else{
//       userTable(result)
//     }

// }

export function userTable(response){
    let json = JSON.parse(response)
    let npm = json.npm == null ? "" : json.npm; 
    let nama = json.nama == null ? "" : json.nama; 
    let penguji = json.penguji == null ? "" : json.penguji; 
    let pembimbing = json.pembimbing == null ? "" : json.pembimbing; 
    let row = '';
        row = rowtabel.replace("#npm#", npm).
        replace("#nama#", nama).
        replace("#penguji#", penguji).
        replace("#pembimbing#", pembimbing);
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

export function PostSignUp() {
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