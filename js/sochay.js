var numMinSub = 0;
var numMaxSub = 120; //Số to nhất
var speedSub = 60; // chỉnh tốc độ chạy 1000 = 1 giây
var checkFirstSub = 0;
var myVarSub, miliVarSub;
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