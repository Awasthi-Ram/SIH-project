function validate(){
    var username = document.getElementById(ID_camp).ariaValueText;
    var password = document.getElementById(password).ariaValueText;

    if((username=="Smashers" || username=="Smashers"|| username=="SMASHERS")&& password=="RV1250"){
        alert("LOGIN SUCCESFULLY");
        window.location.replace(login2.html);
        return false;
    }
    else{
        alert("LOGIN FAILED \n check password and camp id ");
    }
}