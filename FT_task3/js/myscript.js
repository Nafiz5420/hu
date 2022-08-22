
function getfname(){
    var fname=document.getElementById("fname").value;
    if(fname.length<4){
        document.getElementById("fname_error").innerHTML="The Name is not Correct!";
        return false;
    }
    else{
        document.getElementById("fname_error").innerHTML="The Name is Okay.";
        return true;
    }
}
function isfname(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

function getlname(){
    var lname=document.getElementById("lname").value;
    if(lname.length<4){
        document.getElementById("lname_error").innerHTML="The Name is not Correct!";
        return false;
    }
    else{
        document.getElementById("lname_error").innerHTML="The Name is Okay.";
        return true;
    }
}
function islname(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }
function age(){
    var age=document.getElementById('ageTextBox').value;

// Convert user entered age to a number

age = parseInt(age, 10);

//check if age is a number or less than or greater than 100
if (isNaN(age) || age < 1 || age > 100)
{ 
  alert("The age must be a number between 1 and 100");
  return false;
}
}
function validateEmail(email) {
    const regex_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (regex_pattern.test(email)) {
        console.log('The email address is valid');
    }
    else {
        console.log('The email address is not valid');
    }
}


function password(){
    var password=document.getElementById("password").value;
    if(password == "") {  
        document.getElementById("message").innerHTML = "The password is empty!";  
        return false;  
     }
       
    if(password.length<8){
        document.getElementById("password_error").innerHTML="The password length must be 8 charecter!";
        return false;
    }
    else{
        document.getElementById("password_error").innerHTML="The password is Okay.";
        return true;
    }
}
 

function formResult(){
    if(document.getElementById("male").checked==true){
        document.write("Male")
    }else{
        return false;
    }
}







function myAjax(){
    var myxhttp=new XMLHttpRequest();
    var name= document.getElementById("fname").value;
  
myxhttp.onreadyStatechange=function(){
    if(this.readyState== 4& this.status==200){
        document.getElementById("fname_error").innerHTML=this.responseText;
    }
}
myxhttp.open("POST","http://localhost/finallab/control/validationcheck.php",true );
myxhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
myxhttp.send("fname="+name);




}