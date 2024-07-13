function loginForm(){
    var name=document.getElementById('name').value;

    document.getElementById('nameError').innerHTML='';

    if(name === ''){
        document.getElementById('nameError').innerHTML='Name is Required';
        return false;
    }
    alert('Form Submitted Successfully!');
    return true;
}



function signupForm(){
    var fname=document.getElementById('fname').value;
    var lname=document.getElementById('lname').value;
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    var conformpassword=document.getElementById('conformpassword').value;
    // var policy=document.getElementById('policy').value;
  
    // document.getElementById('fullnameError').innerHTML='';
    document.getElementById('fnameError').innerHTML='';
    document.getElementById('lnameError').innerHTML='';
    document.getElementById('emailError').innerHTML='';
    document.getElementById('passwordError').innerHTML='';
    document.getElementById('conformpasswordError').innerHTML='';
    // document.getElementById('tearmsError').innerHTML='';
  
    if(fname === ''){
      document.getElementById('fnameError').innerHTML='First Name is Required';
      return false;
    }
    // if (fname === '' && lname === '') {
    //     document.getElementById('fullnameError').innerHTML = 'Please enter both First Name and Last Name';
    //     return false;
    // }
    if(lname === ''){
        document.getElementById('lnameError').innerHTML='Last Name is Required';
        return false;
    }
    var emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)){
      document.getElementById('emailError').innerHTML='Invalid Email Id';
      return false;
    }
    if(password === ''){
      document.getElementById('passwordError').innerHTML='Password is Required';
      return false;
    }
    if(password.length < 8){
      document.getElementById('passwordError').innerHTML='password must be alteat 8 characters';
      return false;
    }
    if(conformpassword === ''){
      document.getElementById('conformpasswordError').innerHTML='Retype yor password';
      return false;
    }
    if(conformpassword !== password){
      document.getElementById('conformpasswordError').innerHTML='password do not match';
      return false;
    }
    // if(policy === ''){
    //     document.getElementById('tearmsError').innerHTML='ClickON to get submited';
    //     return false;
    // }


//     const policyCheckbox = document.getElementById('policy');

// // Get the error message element
// const termsError = document.getElementById('tearmsError');

// // Add an event listener to the policy checkbox
// policyCheckbox.addEventListener('change', () => {
//   if (policyCheckbox.checked && termsError.innerHTML === '') {
//     // Submit the form when the policy checkbox is checked and no error message is displayed
//     document.querySelector('.Myform').submit();
//   }
// });

    alert('Form Submitted Successfully!');
    return true;
  }



  function forgetForm(){
    var name=document.getElementById('name').value;
    var npassword=document.getElementById('npassword').value;
    var conformpassword=document.getElementById('conformpassword').value;

    document.getElementById('nameError').innerHTML='';
    document.getElementById('passwordError').innerHTML='';
    document.getElementById('conformpasswordError').innerHTML='';

    if(name === ''){
        document.getElementById('nameError').innerHTML='Name is Required';
        return false;
    }
    if(npassword === ''){
      document.getElementById('passwordError').innerHTML='Password is Required';
      return false;
    }
    if(npassword.length < 8){
      document.getElementById('passwordError').innerHTML='password must be alteat 8 characters';
      return false;
    }
    if(conformpassword === ''){
      document.getElementById('conformpasswordError').innerHTML='Retype yor password';
      return false;
    }
    if(conformpassword !== password){
      document.getElementById('conformpasswordError').innerHTML='password do not match';
      return false;
    }
    alert('Form Submitted Successfully!');
    return true;
}