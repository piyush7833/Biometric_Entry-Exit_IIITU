var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var up2 = document.getElementById("up2")
var in2 = document.getElementById("in2")
console.log("Welcome");
up2.classList.add('closed');
btn1.addEventListener("click", function() {
    up2.classList.add('closed');
    in2.classList.remove('closed');
  });
btn2.addEventListener("click", function() {
    in2.classList.add('closed');
    up2.classList.remove('closed');
  });

  let uemail = document.getElementsByClassName('uemail');
  