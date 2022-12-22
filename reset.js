import { getAuth, updatePassword } from "firebase/auth";
let newPass = document.getElementById('resetform');
const auth = getAuth();
newPass.addEventListener('submit', (e) => {
    e.preventDefault();
const user = auth.currentUser;
const newPassword = newPass['rnpwd'].value;
const cPassword = newPass['rcpwd'].value;
const oPassword = newPass['rpwd'].value;
if(newPassword===cPassword){
    updatePassword(user, newPassword).then(() => {
      // Update successful.
    }).catch((error) => {
      // An error ocurred
      // ...
    });
}
else{
    alert("New password and confirm password is not same")
}
});