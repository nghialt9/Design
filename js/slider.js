var sliderMoney = document.getElementById("moneyRange");
var outputMoney = document.getElementById("money");
var sliderDay = document.getElementById("dayRange");
var outputDay = document.getElementById("day");
var outputTotalMoney = document.getElementById("totalMoney");
var studentRadio = document.getElementById("student");
var regex = /(\d)(?=(\d{3})+(?!\d))/g;
outputMoney.innerHTML = sliderMoney.value.replace(regex, '$1,');
outputDay.innerHTML = sliderDay.value + " Ngày";
var work;
calMonney();
sliderMoney.oninput = function(e) {
    calMonney();
    outputMoney.innerHTML = sliderMoney.value.replace(regex, '$1,');
    var value = e.target.value - 1000000;
	document.getElementById("moneyProgress").value = value;
}

sliderDay.oninput = function(e) {
    calMonney();
    outputDay.innerHTML = this.value + " Ngày";
    var value = e.target.value;
	document.getElementById("dayProgress").value = value;
}

function calMonney() {
    work = true;
    var num = 0.55;
    sliderMoney.max = "10000000";
    document.getElementById("moneyProgress").max = "9000000";
    document.getElementById("num-money-end").innerText = "10,000,000";
	if(studentRadio.checked == true) {
        if(work){
            if(sliderMoney.value > 5000000){
                sliderMoney.value = "5000000";
                document.getElementById("moneyProgress").value = "4000000";
                outputMoney.innerHTML = sliderMoney.value.replace(regex, '$1,');
            }
        }
        num = 0.36; 
        sliderMoney.max = "5000000";
        document.getElementById("moneyProgress").max = "4000000";
        document.getElementById("num-money-end").innerText = "5,000,000";
        work = false;
    }
    var numPer = Number.parseInt(sliderMoney.value) * num / 365;
    var numDay = Number.parseInt(sliderDay.value);
    var numMoney = Number.parseInt(sliderMoney.value);
    var total = Math.floor(numPer * numDay + numMoney).toString();
    outputTotalMoney.innerHTML = total.replace(regex, '$1,') + " VNÐ";
}