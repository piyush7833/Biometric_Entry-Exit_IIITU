//signup
let signup = document.getElementById("SignUp");
let signin = document.getElementById("SignIn");
signup.addEventListener('submit',function (e) {
    e.preventDefault();   
    //get user info
    let uemail = signup['uemail'].value;
    let upwd = signup['upwd'].value;
    let ucpwd = signup['ucpwd'].value;
    let reg=/[0-9][0-9][0-9][0-9][0-9]@iiitu.ac.in/;
    let result=reg.exec(uemail);
    if(result){
    if(upwd===ucpwd){
        //signup the user usimg firebase
        auth.createUserWithEmailAndPassword(uemail, upwd).then(cred => {
        console.log(cred.user);
        signup.reset();
        signup.querySelector('.error').innerHTML =``;
        // window.location = "http://127.0.0.1:5501/stu.html";  
      }).catch(err=>{
        signup.querySelector('.error').innerHTML =err.message;
        signup.reset();
      });
    }
    else{
        alert("Password and Confirm Password is not same");
    }
  }
  else{
    alert("use student institute email id for signing up ");
  }
})


signin.addEventListener('submit',function (f) {
    f.preventDefault();  

});



// login

  signin.addEventListener('submit', (e) => {
    e.preventDefault();
    // get user info
    const iemail = signin['iemail'].value;
    const ipwd = signin['ipwd'].value;
  
    // log the user in
    auth.signInWithEmailAndPassword(iemail, ipwd).then((cred) => {
      // console.log(cred.user);
      signin.reset();
      // window.location = "http://127.0.0.1:5501/stu.html"; 
    }).catch(err=>{
      signin.querySelector('.error').innerHTML =err.message;
      signin.reset();
    });;
  });




// listen for auth status changes
auth.onAuthStateChanged(user => {
  let reg=/[0-9]@iiitu/;
  let result;
    if (user) {
      console.log('user logged in: ', user.email);
      result=reg.exec(user.email);
      if(result){
        window.location = "http://127.0.0.1:5501/entry.html";
      }
      else{
        window.location="http://127.0.0.1:5501/entry2.html"
      }
    } 
    else {
      console.log('user logged out');
    }
  })
  //entry
  