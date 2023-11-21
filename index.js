function validation(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML = "Enter Username*"
        return false;
        
    } if (document.Formfill.Username.value.length<6){
        document.getElementById("result").innerHTML = "Atleast Six Letter*"
    }
    
    else{
        document.getElementById("result").innerHTML = ""   
    }
     if(document.Formfill.Email.value==""){
        document.getElementById("result1").innerHTML = "Enter Your Email*"
        return false;
    } else {
        document.getElementById("result1").innerHTML = ""
    }
    
     if(document.Formfill.Password.value==""){
        document.getElementById("result2").innerHTML = "Enter Your Password*"
        return false;
    }
    else if( document.Formfill.Password.value.length<6){
        document.getElementById("result2").innerHTML = "password must be 6-digit"
    
    }
    else{
        document.getElementById("result2").innerHTML = ""
    }
   
     if( document.Formfill.CPassword.value==""){
        document.getElementById("result3").innerHTML = "Enter Confirm Password"
        return false;
    }
    else{
        document.getElementById("result3").innerHTML = ""
    }
     if(document.Formfill.CPassword.value !== document.Formfill.Password.value){
        document.getElementById("result3").innerHTML = "password dos'nt matched"
        return false;
    }
    else if(document.Formfill.Password.value == document.Formfill.CPassword.value){
       popup.classList.add("open-slide")
        return false;
    } 
   
}

let popup=document.getElementById('popup')
function CloseSlide(){
    popup.classList.remove("open-slide")
}