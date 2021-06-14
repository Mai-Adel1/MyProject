function validation(){
  // store the value that user enter in variables
  var check=true;
  var user = document.getElementById('fname').value;
  var user2 =  document.getElementById('lname').value;
  var pass = document.getElementById('pass').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  
  var myform = document.getElementById('myform');
   // to check if that field empty or not
  
 
 //  to accert a name of 3 letters at least
  if(user.length<3){
      alert("*first Name must be more than 2 letters*");
      return false;
  }
  if(user2.length<3){
    alert("*last Name must be more than 2 letters*");
    return false;
}
  
  
  
  if(pass.search(/[ ]/)!=-1){
     alert("**password must not include a space**");
  return false;
 }
  // limit the lenght of the  pass
  if(pass.length != 8 ){
    alert("**please write a passward of 8 no long no less**");
      return false;
  }
    // must enclud numbers
 if(pass.search(/[0-9]/)==-1){
      
      alert("**password must include at least a number**");
      return false;
  }
  //not to accept without upper characters
  var first=pass.substr(0,1);
  if(!(first.match(/[A-Z]/))){
      alert("**first letter should be Uppercase in password**");
      return false;
  }
  
  // not to accept without lower characters
 if(pass.search(/[a-z]/)==-1){
      alert("**password must include at least 1 lower character**");
  return false;
 }
  // not accept without special characters
  if(pass.search(/[!\@\#\$\%\^\&\*\(\)\_\-\=\+\<\>\,\?]/)==-1){
     
         alert("**password must include 1 special character**");
      return false;
     }

 
     if(email.indexOf("@") == -1 || email.length < 6){
      alert("**Please Enter valid Email**");
       return false;}
       
    if (!phone.match(/[0-9]{3}-[0-9]{3}-[0-9]{4}/)){
		//for mobile phone in egypt //if (!phone.match(/^[0-9]{11}$/)){

		alert("Phone is not valid");
		check=false;
	}
  else
  {
    alert("thank you");
    window.location.href="./index.html";
    return  true;
  }


  
}