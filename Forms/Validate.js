function validate(){
    var re = /(?=.*[@#$%^&*&+=]){1}/;
    var remail = /^(.+)@(.+)$(.*)/;
    var fname=document.getElementById("firstName").value;
    var lname=document.getElementById("lastName").value;
    var email=document.getElementById("email").value;
    var pass= document.getElementById("password").value;
    var date= document.getElementById("date").value;

    if(fname.length<5){
        if(fname.length==0)
            document.getElementById("f").innerText="Please enter the First Name";
        else
        document.getElementById("f").innerText="Name is Too short";
        return false;

    }
    else if(!fname.match((/^[A-Za-z]+$/))){
     document.getElementById("f").innerText="Invalid First Name";
     return false;
    }

    if(lname==""){
     document.getElementById("l").innerText="Please enter Last Name";
        return false;
    }
    else if(!fname.match(/^[a-zA-Z]/)){
        document.getElementById("l").innerText="Invalid Last Name";
        return false;
    }
    if(email==""){
        document.getElementById("eid").innerText="This Feild is Mandatory";
        return false;
    }
    else if (!email.match(remail)){
        document.getElementById("eid").innerText="Invalid Email";
        return false;
    }
    if(pass==""){
        document.getElementById("p").innerText="This Feild is Mandatory";
        return false;
    }
    else{
         if( pass.length < 8){
             document.getElementById("p").innerText="Password is Too short";
             return false
         }
        else if (!pass.match(/[a-z]/g)){
            document.getElementById("p").innerText="Must contains atleast one Lower Case Letter"
                return false
        }
        else if(!pass.match(/[A-Z]/g)){
            document.getElementById("p").innerText="Must contains atleast one Upper Case letter"
             return false
        }
        else if(!pass.match(/[0-9]/g)){
            document.getElementById("p").innerText="Must Contains atleast one Number"
             return false
        }
        else if(!pass.match(re)){
                console.log(pass);
                document.getElementById("p").innerText="Need atleast one special character";
                return false
        }
    }
    return true;
}
