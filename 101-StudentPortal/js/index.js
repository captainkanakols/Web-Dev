
document.querySelector(".btn-login").addEventListener("click", function(){
    alert("Welcome");
});

document.querySelector(".btn-register").addEventListener("click", function(){
    var registerFullname = document.querySelector("#student-reg-fullname").value;
    var registerPassword = document.querySelector("#student-reg-password").value;
    var registerCPassword = document.querySelector("#student-reg-cpassword").value;

    if(registerPassword==registerCPassword){
        alert("Welcome "+ registerFullname);
    }else{
        alert("Password Not Match");
    }

});
