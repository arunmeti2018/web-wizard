const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
function validate(){
   
  var mail=document.getElementById("email").value;
  var pass=document.getElementById("password").value;
  
  if( mail==email && pass==password ){
    windows.location.assign("index.html");
    alert("login success");
  }
  
  else{
    alert("Invalid Username Or Password");
  }
}