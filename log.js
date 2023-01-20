
let logout = document.getElementById("logout");
logout.addEventListener('click', function (g) {
    g.preventDefault();
    auth.signOut().then(() => {

      })
})


let a;
auth.onAuthStateChanged(user => {
    if (user) {
      console.log('user logged in: ', user.email);
      a=user.email;
    } 
    else {
      console.log('user logged out');
      window.location = "https://piyush7833.github.io/Biometric_Entry-Exit_IIITU/index.html";
    }
  })

