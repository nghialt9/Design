var regex = /(\d)(?=(\d{3})+(?!\d))/g;
angular.element(document).ready(function () {
	var sliderMoney = document.getElementById("moneyRange");
	var outputMoney = document.getElementById("money");
	var sliderMonth = document.getElementById("monthRange");
	var outputMonth = document.getElementById("month");
	var haityRadio = document.getElementById("haity");
	var moneyProgress = document.getElementById("moneyProgress");
	var monthProgress = document.getElementById("monthProgress");
	outputMoney.innerHTML = Number.parseInt(sliderMoney.value) === 0 ? "20000000".replace(regex, '$1,') + " vnđ" : sliderMoney.value.replace(regex, '$1,') + " vnđ";
	outputMonth.innerHTML = Number.parseInt(sliderMonth.value) === 0 ? "1 Tháng" : sliderMonth.value + " Tháng";
	calMonney();
	sliderMoney.oninput = function (e) {
		calMonney();
		var value;
		if (haityRadio.checked === true) {
			value = e.target.value;
		}
		else {
			value = e.target.value - 2000000000;
		}
		moneyProgress.value = value;
	}

	sliderMonth.oninput = function (e) {
		calMonney();
		var value = e.target.value;
		monthProgress.value = value;
	}
});
function calMonney() {
	var outputMoney = document.getElementById("money");
	var sliderMoney = document.getElementById("moneyRange");
	var outputMonth = document.getElementById("month");
	var haityRadio = document.getElementById("haity");
	var monthProgress = document.getElementById("monthProgress");
	var sliderMonth = document.getElementById("monthRange");
	var outputTotalMoney = document.getElementById("totalMoney");
	var outputMontlyMoney = document.getElementById("montlyMoney");
	var numMoneyStart = document.getElementById("num-money-start");
	var numMoneyEnd = document.getElementById("num-money-end");
	var monthStart = document.getElementById("monthStart");
	var numMonth = Number.parseInt(sliderMonth.value);
	var laiSuat;
	if (haityRadio.checked === true) {
		if (numMonth === 0) numMonth = 1;
		switch (numMonth) {
			case 1:
				laiSuat = 0.08;
				break;
			case 3:
				laiSuat = 0.09;
				break;
			case 6:
				laiSuat = 0.10;
				break;
			case 9:
				laiSuat = 0.11;
				break;
			case 12:
				laiSuat = 0.12;
				break;
			default:
			// code block
		}
		document.getElementById("txtHaiTy").style.color = "#2450D7";
		document.getElementById("txtBonTy").style.color = "black";
		if (sliderMonth.value === "0") {
			outputMonth.innerHTML = (Number.parseInt(sliderMonth.value) + 1) + " Tháng";
		}
		else {
			outputMonth.innerHTML = sliderMonth.value + " Tháng";
		}
		if (Number.parseInt(sliderMoney.value) > 1980000000) {
			sliderMoney.max = "1980000000";
			sliderMoney.min = "0";
			sliderMoney.step = "20000000";
			moneyProgress.max = "1980000000";
			moneyProgress.value = "0";
			sliderMoney.value = "0";
		}
		if (sliderMoney.value === "0") {
			outputMoney.innerHTML = "20000000".replace(regex, '$1,') + " vnđ";
		}
		else {
			outputMoney.innerHTML = sliderMoney.value.replace(regex, '$1,') + " vnđ";
		}
		monthProgress.max = "12";
		sliderMonth.max = "12";
		monthStart.innerText = "1 Tháng";
		numMoneyEnd.innerText = "1 tỷ 980";
		numMoneyStart.innerText = "20 triệu";
	} else {
		if (numMonth === 0) numMonth = 3;
		switch (numMonth) {
			case 3:
				laiSuat = 0.095;
				break;
			case 6:
				laiSuat = 0.105;
				break;
			case 9:
				laiSuat = 0.115;
				break;
			case 12:
				laiSuat = 0.125;
				break;
			default:
			// code block
		}
		document.getElementById("txtBonTy").style.color = "#2450D7";
		document.getElementById("txtHaiTy").style.color = "black";

		if (Number.parseInt(sliderMoney.value) < 2000000000) {
			sliderMoney.max = "4000000000";
			sliderMoney.min = "2000000000";
			sliderMoney.step = "50000000";
			moneyProgress.max = "2000000000";
			moneyProgress.value = "0";
			sliderMoney.value = "2000000000";
		}
		monthProgress.max = "9";
		sliderMonth.max = "9";
		monthStart.innerText = "3 tháng";
		outputMonth.innerHTML = (Number.parseInt(sliderMonth.value) + 3) + " Tháng"
		outputMoney.innerHTML = sliderMoney.value.replace(regex, '$1,') + " vnđ";
		numMoneyEnd.innerText = "4 tỷ";
		numMoneyStart.innerText = "2 tỷ";
	}

	var numMoney = Number.parseInt(sliderMoney.value);
	if (numMoney === 0) numMoney = 20000000;
	var numPer = numMoney * laiSuat / 12;
	var montly = Math.floor(numPer * 1).toString();
	var total = Math.floor(numPer * numMonth + numMoney).toString();
	outputTotalMoney.innerHTML = total.replace(regex, '$1,');
	outputMontlyMoney.innerHTML = montly.replace(regex, '$1,');
}