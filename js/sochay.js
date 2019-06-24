//notify : có 4 số thì sửa tên biến bỏ Sub thành loại của nó vd: numMinSub cho Subdent
//subscribers
var numMinSub = 0;
var numMaxSub = 120; //Số to nhất
var speedSub = 60; // chỉnh tốc độ chạy 1000 = 1 giây
var checkFirstSub = 0;
var myVarSub, miliVarSub;
// //chiều cao của 2 số nằm ở trên
// var heightSub = parseFloat(document.getElementById("SECTION9").scrollHeight) / 2 + parseFloat(document.getElementById("SECTION271").scrollHeight);
// window.onscroll = function() {
//     myFunctionSub()
// };

// function myFunctionSub() {
//     if (checkFirstSub === 0) {
//         if (document.body.scrollTop > heightSub || document.documentElement.scrollTop > heightSub) {
//             myVarSub = setInterval(myTimerSub, speedSub);
//             miliVarSub = setInterval(RunMilisecondsSub, 1);
//             checkFirstSub = 1;
//         }
//     }
// }

myVarSub = setInterval(myTimerSub, speedSub);
miliVarSub = setInterval(RunMilisecondsSub, 1);

function myTimerSub() {
    document.getElementById("numSub").innerHTML = (numMinSub = numMinSub + 1);
    if (numMinSub > numMaxSub - 1) {
        clearInterval(myVarSub);
        clearInterval(miliVarSub);
        document.getElementById("numSub1").innerHTML = ",920";
    }
}

function RunMilisecondsSub() {
    var countDownDateSub = new Date("01/25/3020 00:00:00").getTime();
    // Get todays date and time
    var nowSub = new Date().getTime();
    // Find the distance between now and the count down date
    var distanceSub = countDownDateSub - nowSub;
    var milisecondsSub = Math.floor((distanceSub % (1000)));
    if (milisecondsSub < 100 && milisecondsSub > 9) {
        milisecondsSub = '0' + milisecondsSub;
    }
    if (milisecondsSub < 10) {
        milisecondsSub = '00' + milisecondsSub;
    }
    document.getElementById("numSub1").innerHTML = "," + milisecondsSub;
}