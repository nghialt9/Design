/* start angularjs */
angular.module('app', [])
    .component('slider', {
        templateUrl: './html/slider.html'
    })
    .component('cong2so', {
        templateUrl: './html/cong2so.html'
    })
    .component('sheet', {
        templateUrl: './html/FormDataToGoogleSheet.html'
    })
    .component('sochay', {
        templateUrl: './html/sochay.html'
    })
    .component('ngoai', {
        templateUrl: './html/ngoai.html'
    })
    .component('trangchu', {
        templateUrl: './html/trangchu.html'
    })
    .component('luckydraw', {
        templateUrl: './html/luckydraw.html'
    })
    .controller('appCtrl', function ($scope, $interval, $http) {
        var vm = this;
        //khởi tạo hàm chạy và khai báo biến
        var init = function () {
            $scope.slidesShow = [{
                numbertext: "1 / 10",
                image: "./assets/anhbia1.jpg",
                text: "Hình ảnh Bào Cát"
            },
            {
                numbertext: "2 / 10",
                image: "./assets/anhbia2.jpg",
                text: "Trang trí cho Trung Thu"
            },
            {
                numbertext: "3 / 10",
                image: "./assets/anhbia3.jpg",
                text: "Địa điểm mỗi nhà"
            },
            {
                numbertext: "4 / 10",
                image: "./assets/anhbia4.jpg",
                text: "Thi múa hát"
            },
            {
                numbertext: "5 / 10",
                image: "./assets/anhbia5.jpg",
                text: "Chuẩn bị phát quà"
            },
            {
                numbertext: "6 / 10",
                image: "./assets/anhbia6.jpg",
                text: "Hại chị xinh xinh đang phát quà"
            },
            {
                numbertext: "7/10",
                image: "./assets/anhbia7.jpg",
                text: "Anh tổ chức đang đọc bài phát biểu trước khi bắt đầu"
            },
            {
                numbertext: "8 / 10",
                image: "./assets/anhbia8.jpg",
                text: "Anh ấy đang xịt thuốc rầy cho đậu phọng"
            },
            {
                numbertext: "9 / 10",
                image: "./assets/anhbia9.jpg",
                text: "Poster quảng bá về hội đình thần"
            },
            {
                numbertext: "10 / 10",
                image: "./assets/anhbia10.jpg",
                text: "Đám bắp đang tốt ở Bào Cát"
            },
            ]
        }
        //model request Quantity
        vm.requestQuantityModel = {
            from: null,
            to: null,
            ngay_mo_the: false,
            ngay_phe_duyet: false,
            ngay_kich_hoat: false,
            ngay_rut_tien: false
        };
        //model request result kh
        vm.requestResultsModel = {
            randomNum: null,
            award: null,
        };
        //lấy ngày hiện tại
        var newdate = new Date();
        var dd = newdate.getDate();
        var mm = newdate.getMonth() + 1;
        var y = newdate.getFullYear();
        vm.requestQuantityModel.from = (dd > 9 ? dd : '0' + dd) + '/' + (mm > 9 ? mm : '0' + mm) + '/' + y;
        vm.requestQuantityModel.to = vm.requestQuantityModel.from;
        //return boolen checkbox
        $scope.$watch(function () {
            return vm.requestQuantityModel.ngay_mo_the, vm.requestQuantityModel.ngay_phe_duyet, vm.requestQuantityModel.ngay_kich_hoat, vm.requestQuantityModel.ngay_rut_tien;
        })
        $scope.Quantity = 100000;
        $scope.strQuantity = '';
        $scope.strQuantity = $scope.Quantity.toString();
        initSoNgauNhien();
        vm.showDialog = function () {
            if (vm.requestResultsModel.award === null) {
                $(".notify").notify("Bạn phải chọn giải để quay", { className: "warn", elementPosition: "top left" });
                return;
            }
            vm.show = true;
        }
        vm.quayTiep = false;
        //ẩn dialog
        vm.hideDialog = function () {
            $scope.listsShow = $scope.resultAPI;
            vm.show = false;
            vm.textBtn = 'QUAY';
            vm.maHd = 'APPL00000000';
            initSoNgauNhien();
            vm.quayTiep = false;
        }
        //set award
        vm.setAward = function (award) {
            $(".notify").notify("Bạn đã chọn Giải " + award, { className: "success", elementPosition: "top left" });
            vm.hideAwardB = true;
            if (award != '') vm.requestResultsModel.award = award;
        }
        //khỏi tạo
        $scope.time = 1;
        function initSoNgauNhien() {
            $scope.length = $scope.strQuantity.length;//độ dài của số chạy
            if ($scope.length === 6) {
                vm.soNgauNhien = "000000";
            }
            if ($scope.length === 5) {
                vm.soNgauNhien = "00000";
            }
            if ($scope.length === 4) {
                vm.soNgauNhien = "0000";
            }
            if ($scope.length === 3) {
                vm.soNgauNhien = "000";
            }
            if ($scope.length === 2) {
                vm.soNgauNhien = "00";
            }
        }
        $scope.min = 1;

        //Tạo số ngẩu nhiên
        $scope.generateNumber = function () {
            $scope.max = $scope.Quantity;
            $scope.randomNumber = Math.floor(Math.random() * ($scope.max - $scope.min + 1) + $scope.min);
        }
        //chạy số
        var RunMilisecondsSub;
        vm.textBtn = 'QUAY';
        vm.maHd = 'APPL00000000';
        function quayso() {
            $scope.generateNumber();
            RunMilisecondsSub = $interval(function () {
                if ($scope.time < 60) {
                    vm.disabled = true;
                    var countDownDateSub = new Date("01/25/3050 00:00:00").getTime();
                    var nowSub = new Date().getTime();
                    var distanceSub = countDownDateSub - nowSub;
                    var haiSo = Math.floor((distanceSub % (100)));
                    var motSo = Math.floor((distanceSub % (10)));
                    if (haiSo < 10) {
                        haiSo = '0' + haiSo;
                    }
                    if ($scope.length === 6) {
                        vm.soNgauNhien = haiSo + "" + haiSo + "" + haiSo;
                    }
                    if ($scope.length === 5) {
                        vm.soNgauNhien = motSo + "" + haiSo + "" + haiSo;
                    }
                    if ($scope.length === 4) {
                        vm.soNgauNhien = haiSo + "" + haiSo;
                    }
                    if ($scope.length === 3) {
                        vm.soNgauNhien = motSo + "" + haiSo;
                    }
                    if ($scope.length === 2) {
                        vm.soNgauNhien = haiSo;
                    }
                    $scope.time += 1;
                }
                else {
                    $scope.stopFight();
                }
            }, 25);
        }
        vm.quaySo = function () {
            // Don't start a new fight if we are already fighting
            if (angular.isDefined(RunMilisecondsSub)) return;
            if (vm.textBtn === 'QUAY') {
                quayso();
            }
            else {
                //vm.hideDialog();
                $scope.listsShow = $scope.resultAPI;
                quayso();
            }
        };
        //ngưng chạy số
        $scope.stopFight = function () {
            if (angular.isDefined(RunMilisecondsSub)) {
                $interval.cancel(RunMilisecondsSub);
                RunMilisecondsSub = undefined;
                vm.textBtn = 'QUAY TIẾP';
                vm.quayTiep = true;
                vm.disabled = false;
                $scope.time = 1;
                vm.soNgauNhien = $scope.randomNumber;
                var lenNum = vm.soNgauNhien.toString().length;
                if ($scope.length === 6) {
                    if (lenNum === 5) vm.soNgauNhien = '0' + vm.soNgauNhien;
                    if (lenNum === 4) vm.soNgauNhien = '00' + vm.soNgauNhien;
                    if (lenNum === 3) vm.soNgauNhien = '000' + vm.soNgauNhien;
                    if (lenNum === 2) vm.soNgauNhien = '0000' + vm.soNgauNhien;
                    if (lenNum === 1) vm.soNgauNhien = '00000' + vm.soNgauNhien;
                }
                if ($scope.length === 5) {
                    if (lenNum === 4) vm.soNgauNhien = '0' + vm.soNgauNhien;
                    if (lenNum === 3) vm.soNgauNhien = '00' + vm.soNgauNhien;
                    if (lenNum === 2) vm.soNgauNhien = '000' + vm.soNgauNhien;
                    if (lenNum === 1) vm.soNgauNhien = '0000' + vm.soNgauNhien;
                }
                if ($scope.length === 4) {
                    if (lenNum === 3) vm.soNgauNhien = '0' + vm.soNgauNhien;
                    if (lenNum === 2) vm.soNgauNhien = '00' + vm.soNgauNhien;
                    if (lenNum === 1) vm.soNgauNhien = '000' + vm.soNgauNhien;
                }
                if ($scope.length === 3) {
                    if (lenNum === 2) vm.soNgauNhien = '0' + vm.soNgauNhien;
                    if (lenNum === 1) vm.soNgauNhien = '00' + vm.soNgauNhien;
                }
                if ($scope.length === 2) {
                    if (lenNum === 1) vm.soNgauNhien = '0' + vm.soNgauNhien;
                }

                //gọi API lấy result kh
                vm.requestResultsModel.randomNum = $scope.randomNumber;
                $http.post('/cus/lucky-award', vm.requestResultsModel).then(function (response) {
                    $scope.resultAPI = response.data;
                    var countArray = $scope.resultAPI.length;
                    vm.maHd = $scope.resultAPI[countArray - 1].app_num;
                });
            }
        };
        //chạy hàm khởi tạo
        init();

        //hàm chạy thời gian.
        var updateClock = function () {
            $scope.dateNow = new Date();
        };
        $interval(updateClock, 1);
        updateClock();
    });
/* end angularjs */

/* start sliders */
var slideIndex = 1;
//-- use angular --
angular.element(document).ready(function () {
    // createDot();
    // showSlides(slideIndex);
    // var x = setInterval(function () {
    //     showSlides(slideIndex);
    //     slideIndex += 1;
    // }, 3000);
});

$(document).ready(function () {
    // createDot();
    // showSlides(slideIndex);
    // var x = setInterval(function() {
    //     showSlides(slideIndex);
    //     slideIndex += 1;
    // }, 3000);
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
/* end sliders */

/* start create element dot */
function createDot() {
    for (let index = 1; index < 11; index++) {
        var para = document.createElement("span");
        para.className = "dot";
        para.onclick = function () { currentSlide(index) };
        document.getElementById("dot").appendChild(para);
    }
}
/* start create element dot */

/* start check barcode */
function check() {
    
    var str1 = String(document.getElementById('maVach').value);
    if(str1.length === 0){
        document.getElementById('resultC').innerHTML = '';
        return;
    }
    var str = new RegExp(/\D/);

    //check number
    if (str.test(str1)) {
        str1 = str1.replace(/\D/g, "");
        document.getElementById('maVach').value = str1;
    }

    //declare variable
    var even = 0, odd = 0, sumEven = 0, sumOdd = 0, sum = 0, multiples = 0;
    if(str1.length != 13){
        document.getElementById('resultC').innerHTML = 'Đang nhập liệu...';
        document.getElementById('resultC').style = 'color: #464646;'
        return;
    }
    var str2 = str1.substr(0, str1.length - 1);
    var latsnum = Number(str1.substr(str1.length - 1));

    for (var i = 0; i < str2.length; i++) {
      if((i+1)%2 === 0){
        even += Number(str2.slice(str2.length - i - 1, str2.length - i));
      }
      else{
        odd += Number(str2.slice(str2.length - i - 1, str2.length - i));
      }
    }

    odd = 3 * odd;
    sum = odd + even;
    var strTemp = sum.toString()
    var numtemp = Number(strTemp.substr(strTemp.length - 1));

    if(numtemp === 0) multiples = sum;
    else{
      var numodd = 10 - numtemp;
      multiples = sum + numodd;
    }

    if(multiples - sum === latsnum){
        document.getElementById('resultC').innerHTML = 'Hàng thật.';
        document.getElementById('resultC').style = 'color: green;'
    }
    else{
        document.getElementById('resultC').innerHTML = 'Hàng giả.';
        document.getElementById('resultC').style = 'color: red;'
    } 
}
/* end check barcode */

function formatNumber(number) {
	return new Intl.NumberFormat().format(number);
}

function isConsecutiveNumbers(nums) {
	nums = nums.sort((a, b) => (a > b ? -1 : 1)); //desc
	const max = nums[0];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== max - i) return false;
	}
	return true;
}

function numberToWords() {
    var vn = document.getElementById("vn");
	var money = document.getElementById("Tien");
    var language = vn.checked ? "vn" : "en";
	number = parseInt(money.value);
	if (language === 'vn') {
        document.getElementById("resultD").innerHTML = numberToWordsVn(number);
		return;
	}
	if (language === 'en') {
        document.getElementById("resultD").innerHTML = numberToWordsEn(number, '');
		return;
	}
	return numberToWordsEn(number, language);
}

const digit = [' không ', ' một ', ' hai ', ' ba ', ' bốn ', ' năm ', ' sáu ', ' bảy ', ' tám ', ' chín '];
const money = ['', ' nghìn', ' triệu', ' tỷ', ' nghìn', ' triệu'];
const ext = [' linh ', ' mốt ', ' lăm ', ' mươi', ' mười ', ' trăm '];

function readThreeNumber(threeNumber) {
	var result = '';
	var hundred = parseInt(threeNumber / 100);
	var dozen = parseInt((threeNumber % 100) / 10);
	var unit = threeNumber % 10;
	if (hundred === 0 && dozen === 0 && unit === 0) return '';
	result += digit[hundred] + ext[5];
	if (dozen === 0 && unit !== 0) result += ext[dozen];
	if (dozen !== 0 && dozen !== 1) {
		result += digit[dozen] + ext[3];
		if (dozen === 0 && unit !== 0) result = result + ext[dozen];
	}
	if (dozen === 1) result += ext[4];
	switch (unit) {
		case 1:
			if (dozen !== 0 && dozen !== 1) {
				result += ext[1];
			} else {
				result += digit[unit];
			}
			break;
		case 5:
			if (dozen === 0) {
				result += digit[unit];
			} else {
				result += ext[2];
			}
			break;
		default:
			if (unit !== 0) {
				result += digit[unit];
			}
			break;
	}
	return result;
}

function numberToWordsVn(num) {
	num = parseInt(num);
	var times = 0,
		number = 0,
		i = 0;
	var result = '',
		tmp = '';
	var location = [];
	if (num < 0) return 'Số tiền âm !';
	if (num === 0) return 'Không đồng !';
	if (num > 0) {
		number = num;
	} else {
		number = -num;
	}
	if (num > 8999999999999999) {
		return 'Số quá lớn!';
	}
	location[5] = Math.floor(number / 1000000000000000);
	if (isNaN(location[5])) location[5] = '0';
	number = number - parseFloat(location[5].toString()) * 1000000000000000;
	location[4] = Math.floor(number / 1000000000000);
	if (isNaN(location[4])) location[4] = '0';
	number = number - parseFloat(location[4].toString()) * 1000000000000;
	location[3] = Math.floor(number / 1000000000);
	if (isNaN(location[3])) location[3] = '0';
	number = number - parseFloat(location[3].toString()) * 1000000000;
	location[2] = parseInt(number / 1000000);
	if (isNaN(location[2])) location[2] = '0';
	location[1] = parseInt((number % 1000000) / 1000);
	if (isNaN(location[1])) location[1] = '0';
	location[0] = parseInt(number % 1000);
	if (isNaN(location[0])) location[0] = '0';
	if (location[5] > 0) {
		times = 5;
	} else if (location[4] > 0) {
		times = 4;
	} else if (location[3] > 0) {
		times = 3;
	} else if (location[2] > 0) {
		times = 2;
	} else if (location[1] > 0) {
		times = 1;
	} else {
		times = 0;
	}
	for (i = times; i >= 0; i--) {
		tmp = readThreeNumber(location[i]);
		if (i === times && tmp.startsWith(digit[0])) tmp = tmp.replace(digit[0], '').replace(ext[0], '').replace(ext[5], '');
		result += tmp;
		if (location[i] > 0) result += money[i];
		if (i > 0 && tmp.length > 0) result += ' ';
	}
	if (times > 3 && result.trim().split(" ").length <= 5) result += money[3];
	if (result.substring(result.length - 1) === ',') {
		result = result.substring(0, result.length - 1);
	}
	result = result.substring(1, 2).toUpperCase() + result.substring(2);
	return result + ' đồng';
}

var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function numberToWordsEn (num, l) {
	if (num === 0) return l === '' ? 'Zero dollars !' : 'Zero ' + l;
    if ((num = num.toString()).length > 17) return 'overflow';
    var n = ('00000000000000000' + num).substr(-17).match(/^(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
	str += (n[1] !== "00") ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'milion ' : '';
    str += (n[2] !== "0") ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'hundred ' : (n[1] !== "00") ? 'bilion ' : '';
    str += (n[3] !== "00") ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : (n[2] !== "0") ? 'thousand bilion ' : '';
    str += (n[4] !== "0") ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : (n[3] !== "00") ? 'bilion ' : '';
    str += (n[5] !== "00") ? (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'bilion ' : (n[4] !== "0") ? 'bilion ' : '';
	str += (n[6] !== "0") ? (a[Number(n[6])] || b[n[6][0]] + ' ' + a[n[6][1]]) + 'hundred ' : '';
	str += (n[7] !== "00") ? (a[Number(n[7])] || b[n[7][0]] + ' ' + a[n[7][1]]) + 'milion ' : (n[6] !== "0") ? 'milion ' : '';
	str += (n[8] !== "0") ? (a[Number(n[8])] || b[n[8][0]] + ' ' + a[n[8][1]]) + 'hundred ' : '';
	str += (n[9] !== "00") ? (a[Number(n[9])] || b[n[9][0]] + ' ' + a[n[9][1]]) + 'thousand ' : (n[8] !== "0") ? 'thousand ' : '';
	str += (n[10] !== "0") ? (a[Number(n[10])] || b[n[10][0]] + ' ' + a[n[10][1]]) + 'hundred ' : '';
    str += (n[11] !== "00") ? ((str != '') ? 'and ' : '') + (a[Number(n[11])] || b[n[11][0]] + ' ' + a[n[11][1]]) : '';
    str = str.substring(0, 1).toUpperCase() + str.substring(1);
	return l === '' ? str + 'dollars' : str + ' ' + l;
}