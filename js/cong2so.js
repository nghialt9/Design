angular.element(document).ready(function() {
    $("#date1").datepicker({
        dateFormat: "dd/mm/yy"
    });
    $("#date2").datepicker({
        dateFormat: "dd/mm/yy"
    });

    var newdate = new Date("12/31/2005");
    var dd = newdate.getDate();
    var mm = newdate.getMonth() + 1;
    var y = newdate.getFullYear();
    var someFormattedDate = (dd > 9 ? dd : '0' + dd) + '/' + (mm > 9 ? mm : '0' + mm) + '/' + y;
    document.getElementById('date1').value = someFormattedDate;

    var newdate1 = new Date();
    var dd1 = newdate1.getDate();
    var mm1 = newdate1.getMonth() + 1;
    var y1 = newdate1.getFullYear();
    var someFormattedDate1 = (dd1 > 9 ? dd1 : '0' + dd1) + '/' + (mm1 > 9 ? mm1 : '0' + mm1) + '/' + y1;
    document.getElementById('date2').value = someFormattedDate1;

    caldate();
});
// Set the date we're counting down to
var countDownDate = new Date("01/25/2020 00:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    hours = hours > 9 ? hours : '0' + hours;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    minutes = minutes > 9 ? minutes : '0' + minutes;
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    seconds = seconds > 9 ? seconds : '0' + seconds;
    var miliseconds = Math.floor((distance % (1000)));
    if (miliseconds < 100 && miliseconds > 9) {
        miliseconds = '0' + miliseconds;
    }
    if (miliseconds < 10) {
        miliseconds = '00' + miliseconds;
    }
    // Output the result in an element with id="demo"
    var resultT = document.getElementById("resultT");
    if(resultT){
        resultT.innerHTML = "Left " + days + " day(s) " + hours + " hour(s) " +
        minutes + " minute(s) " + seconds + " seconds " + miliseconds + " milliseconds to New Year's Eve";

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            resultT.innerHTML = "EXPIRED";
        }
    }
    
}, 1);

function caldate() {
    var tt = document.getElementById('date1').value;
    var initial = tt.split(/\//).reverse().join('/');

    var tt1 = document.getElementById('date2').value;
    var initial1 = tt1.split(/\//).reverse().join('/');

    var date = new Date(initial);
    var newdate = new Date(date);

    var date1 = new Date(initial1);
    var newdate1 = new Date(date1);

    var timeDiff = Math.abs(date1.getTime() - date.getTime());
    var result = Math.ceil(timeDiff / (1000 * 3600 * 24));

    document.getElementById('resultD').innerHTML = "The distance between two dates is: " + result + " day(s)";
}

function myFunction() {
    var Str1 = String(document.getElementById('number1').value);
    var Str2 = String(document.getElementById('number2').value);
    var Str = new RegExp(/\D/);

    //check number
    if (Str.test(Str1)) {
        Str1 = Str1.replace(/\D/g, "");
        document.getElementById('number1').value = Str1;
    }
    if (Str.test(Str2)) {
        Str2 = Str2.replace(/\D/g, "");
        document.getElementById('number2').value = Str2;
    }

    //check number start is 0
    if (Str1.startsWith("0"))
        document.getElementById('number1').value = "";
    if (Str2.startsWith("0"))
        document.getElementById('number2').value = "";

    //check of number more
    var len = 0;
    var sum = 0;
    // number temp
    var tiem = 0;
    var result = '';

    //check number length more
    if (Str1.length >= Str2.length)
        len = Str1.length;
    else len = Str2.length;

    for (var i = 0; i <= len; i++) {
        var number1, number2;

        //check length of number <= i
        if (Str1.length >= i) {
            //get number1 from i index
            number1 = Number(Str1.slice(Str1.length - i - 1, Str1.length - i));
        } else {
            number1 = 0;
        }

        //check length of number <= i
        if (Str2.length >= i) {
            //get number2 from i index
            number2 = Number(Str2.slice(Str2.length - i - 1, Str2.length - i));
        } else {
            number2 = 0;
        }

        sum = number1 + number2 + tiem;

        if (sum >= 10) {
            tiem = 1;
            var numtiem = String(sum).slice(1);
        } else {
            tiem = 0;
            var numtiem = String(sum).slice(0);
        }

        result = numtiem + result;
    }

    if (result.startsWith('0'))
        result = result.replace('0', '');

    document.getElementById('resultS').innerHTML = result;
}

// check for keyboard
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    evt = evt || window.event; //Get event
    if (evt.ctrlKey || evt.shiftKey) {
        return true;
    }
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return true;
    return true;
}
