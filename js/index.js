/* start angularjs */
var slideshow = angular.module('app', []);
slideshow.controller('appCtrl', function ($scope, $interval, $http) {
    //khởi tạo hàm chạy và khai báo biến
    $http.get('./json/data.json').then(function(response) {
        $scope.slidesShow = response.data;
     });
    var init = function () {
        $scope.slidesShow1 = [
            {
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
                text: "Anh ấy đang xitj thuốc rầy cho đậu phọng"
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
            }
        ]
    }

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
// angular.element(document).ready(function () {
//     showSlides(slideIndex);
// });

$( document ).ready(function() {
    showSlides(slideIndex);
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

/* start cal date by input number */
$(document).ready(function () {
    $('#txtDate').datepicker();
});
$("#txtDate").datepicker({
    dateFormat: "dd/mm/yy"
});
function decrementQty() {
    document.getElementById('numDay').value = parseInt(document.getElementById('numDay').value) - 1;
}
function incrementQty() {
    document.getElementById('numDay').value = parseInt(document.getElementById('numDay').value) + 1;
}
function getdate() {
    var tt = document.getElementById('txtDate').value;
    var initial = tt.split(/\//).reverse().join('/');

    var date = new Date(initial);
    var newdate = new Date(date);

    newdate.setDate(newdate.getDate() + parseInt(document.getElementById('numDay').value) - 1);

    var dd = newdate.getDate();
    var mm = newdate.getMonth() + 1;
    var y = newdate.getFullYear();

    var someFormattedDate = dd + '/' + mm + '/' + y;
    document.getElementById('follow_Date').value = someFormattedDate;
}
/* end cal date by input number */