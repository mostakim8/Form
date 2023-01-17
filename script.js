let login= document.querySelector('.login');
let create= document.querySelector('.Create');
let container=document.querySelector('.container');

// new
// const email= document.getElementById("email"); 

login.onclick=function(){
    container.classList.add('signinForm');

    
}

create.onclick=function(){
    container.classList.remove('signinForm');

    // new
    // const emailValiDator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // if(email.value.match(emailValiDator)){

    
    //     alert("sucessfull")

    // }
    // else{
    //     wrong.innerText="invalid email";
    //    }
}


// document.querySelector("form").addEventListener("submit", function(event) {
// event.preventDefault();
// var email = document.querySelector("#email").value;
// var password = document.querySelector("#password").value;
// if (email === "example@email.com" && password === "1234") {
// alert("Logged in successfully!");
// } else {
// alert("Incorrect email or password. Please try again.");
// }
// });

