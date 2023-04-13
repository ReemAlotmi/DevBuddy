document.getElementById("create").onclick= chkPass;

function chkPass(){
    var pass1 = document.getElementById("password");
    var pass2 = document.getElementById("password2");
    var mail = document.getElementById("mail");
    if(mail.value == ""){
        alert("You did not enter an email!");
        return false; 
    }
    if(!mail.value.includes("@")){
        alert("Incorrect email!");
        return false; 
    }
    if(pass1.value == ""){
        alert("You did not enter a password!");
        return false; 
    }
    if(pass1.value != pass2.value){
        alert("The two passwords you entered are not the same\n please re-enter both now!");
        return false;
    }
    else 
    return true;
}
