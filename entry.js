const xhr = new XMLHttpRequest();
const xhr2 = new XMLHttpRequest();
var obj = [];
var obj2 = [];
// var b="Piyush";
let name1 = document.getElementsByClassName('name')[0];
let roll3 = document.getElementsByClassName('roll')[0];
let phone = document.getElementsByClassName('phone')[0];
let status2 = document.getElementsByClassName('Status')[0];
let c = auth.onAuthStateChanged(user => {
    if (user) {
        let b = user.email;
        b = String(b);
        r = b.slice(0, 5);
        xhr.open('GET', 'https://script.google.com/macros/s/AKfycby9euxT0t-lXLkkO4PViQLc49g5D9e3zBL4QxDqm4PXVfxGlMzL-zrjR5oA4RrkhtIVPA/exec')
        xhr2.open('GET', 'https://script.google.com/macros/s/AKfycbw2nTbki1alVSQdBdZeD0KwVol1HC9AzGWrMtS6GTFU4xN-IKoQsT5t7zBzKv1m8Z5d/exec')
        xhr.onload = function () {
            if (this.status === 200) {
                obj = JSON.parse(this.responseText);
                //   console.log(obj);
                  console.log(obj.data);
                const cData = obj.data;
                for (ele in cData) {
                    //  console.log(cData[ele].roll)
                    // let regs = cData[ele].roll;
                    if (r == cData[ele].roll) {
                        
                        name1.innerHTML = `
                         <p class="name"><strong>Name     :</strong> ${cData[ele].name}</p>`
                         roll3.innerHTML=`<p class="roll"><strong>Roll no. :</strong> ${cData[ele].roll}</p>`
                         phone.innerHTML=`<p class="phone"><strong>Phone no. :</strong> ${cData[ele].phone}</p>`
                         console.log(cData[ele].phone);
                    }
                }
            }
        }
        xhr2.onload = function () {
            obj2 = JSON.parse(this.responseText);
            // console.log(obj2);
            const bData = obj2.bookList;
            console.log(bData);
            var k=0;
            for (ele2 in bData){
                if(r==bData[ele2].Rollnumber){
                    k++;
                }
                if(k%2==0){
                    console.log(bData[ele2].Rollnumber)
                    status2.innerHTML=`<p class="Status"><strong>Status :</strong> Inside</p>`
                }
                else{
                    status2.innerHTML=`<p class="Status"><strong>Status :</strong> Outside</p>`
                }
            }
        }
        xhr.send();
        xhr2.send();
    }
})

