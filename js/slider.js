var regex = /(\d)(?=(\d{3})+(?!\d))/g;
var work;
angular.element(document).ready(function() {
    var sliderMoney = document.getElementById("moneyRange");
    var outputMoney = document.getElementById("money");
    var sliderDay = document.getElementById("dayRange");
    var outputDay = document.getElementById("day");
    var outputTotalMoney = document.getElementById("totalMoney");
    var studentRadio = document.getElementById("student");
    var moneyProgress = document.getElementById("moneyProgress");
    var dayProgress = document.getElementById("dayProgress");
    var numMoneyEnd = document.getElementById("num-money-end");
    outputMoney.innerHTML = sliderMoney.value.replace(regex, '$1,');
    outputDay.innerHTML = sliderDay.value + " Ngày";
    calMonney();
    sliderMoney.oninput = function(e) {
        calMonney();
        outputMoney.innerHTML = sliderMoney.value.replace(regex, '$1,');
        var value = e.target.value - 1000000;
        moneyProgress.value = value;
    }

    sliderDay.oninput = function(e) {
        calMonney();
        outputDay.innerHTML = this.value + " Ngày";
        var value = e.target.value;
        dayProgress.value = value;
    }

    function calMonney() {
        work = true;
        var num = 0.55;
        sliderMoney.max = "10000000";
        moneyProgress.max = "9000000";
        numMoneyEnd.innerText = "10,000,000";
        if (studentRadio.checked == true) {
            if (work) {
                if (sliderMoney.value > 5000000) {
                    sliderMoney.value = "5000000";
                    moneyProgress.value = "4000000";
                    outputMoney.innerHTML = sliderMoney.value.replace(regex, '$1,');
                }
            }
            num = 0.36;
            sliderMoney.max = "5000000";
            moneyProgress.max = "4000000";
            numMoneyEnd.innerText = "5,000,000";
            work = false;
        }
        var numPer = Number.parseInt(sliderMoney.value) * num / 365;
        var numDay = Number.parseInt(sliderDay.value);
        var numMoney = Number.parseInt(sliderMoney.value);
        var total = Math.floor(numPer * numDay + numMoney).toString();
        outputTotalMoney.innerHTML = total.replace(regex, '$1,') + " VNÐ";
    }
});

function calMonney() {
    work = true;
    var num = 0.55;
    document.getElementById("moneyRange").max = "10000000";
    document.getElementById("moneyProgress").max = "9000000";
    document.getElementById("num-money-end").innerText = "10,000,000";
    if (document.getElementById("student").checked == true) {
        if (work) {
            if (document.getElementById("moneyRange").value > 5000000) {
                document.getElementById("moneyRange").value = "5000000";
                document.getElementById("moneyProgress").value = "4000000";
                document.getElementById("money").innerHTML = document.getElementById("moneyRange").value.replace(regex, '$1,');
            }
        }
        num = 0.36;
        document.getElementById("moneyRange").max = "5000000";
        document.getElementById("moneyProgress").max = "4000000";
        document.getElementById("num-money-end").innerText = "5,000,000";
        work = false;
    }
    var numPer = Number.parseInt(document.getElementById("moneyRange").value) * num / 365;
    var numDay = Number.parseInt(document.getElementById("dayRange").value);
    var numMoney = Number.parseInt(document.getElementById("moneyRange").value);
    var total = Math.floor(numPer * numDay + numMoney).toString();
    document.getElementById("totalMoney").innerHTML = total.replace(regex, '$1,') + " VNÐ";
}