const form = document.querySelector('form');
var urlPost = "https://mrt.ulbi.ac.id/notif/sidang"
var TokenKey = "Login"
var TokenLogin = "v4.public.eyJleHAiOiIyMDIzLTA3LTEwVDIyOjI4OjM1KzA3OjAwIiwiaWF0IjoiMjAyMy0wNy0xMFQyMDoyODozNSswNzowMCIsImlkIjoiNjI4MTMxNjc2OTY1NiIsIm5iZiI6IjIwMjMtMDctMTBUMjA6Mjg6MzUrMDc6MDAiffqPWQNGuVPZC6AgjNa5Rqalv6pfY1KSOQe1zNjduR0eWLRruvJOTatne4-RfjKZoObduxL2XGkzyTVJpdRZKQQ"

function PostSignUp() {
    var myHeaders = new Headers();
    myHeaders.append(TokenKey, TokenLogin);
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "nomor": "4381/PUS.01.01/PDPBP"
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    fetch(urlPost, requestOptions)
      .then(response => response.text())
      .then(result => AmbilResponse(result))
      .catch(error => console.log('error', error));
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    PostSignUp(formData);
    resetform();
  })

function AmbilResponse(result) {
  console.log(result)
}

function resetform(){
  document.getElementById('form').reset();
}
