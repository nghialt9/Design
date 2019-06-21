var slideshow = angular.module('app', []);
slideshow.controller('appCtrl', function ($scope, $interval) {
    var init = function () {
        $scope.slidesShow = [
            {
                numbertext: "1 / 10",
                image: "./assets/anhbia1.jpg",
                text: "Hình ảnh Bào Cát"
            },
            {
                numbertext: "2 / 10",
                image: "./assets/anhbia2.jpg",
                text: "Hình ảnh Bào Cát"
            },
            {
                numbertext: "3 / 10",
                image: "./assets/anhbia3.jpg",
                text: "Hình ảnh Bào Cát"
            },
            {
                numbertext: "4 / 10",
                image: "./assets/anhbia4.jpg",
                text: "Hình ảnh Bào Cát"
            },
            {
                numbertext: "5 / 10",
                image: "./assets/anhbia5.jpg",
                text: "Hình ảnh Bào Cát"
            },
            {
                numbertext: "6 / 10",
                image: "./assets/anhbia6.jpg",
                text: "Hình ảnh Bào Cát"
            },
            {
                numbertext: "7/10",
                image: "./assets/anhbia7.jpg",
                text: "Hình ảnh Bào Cát"
            },
            {
                numbertext: "8 / 10",
                image: "./assets/anhbia8.jpg",
                text: "Hình ảnh Bào Cát"
            },
            {
                numbertext: "9 / 10",
                image: "./assets/anhbia9.jpg",
                text: "Hình ảnh Bào Cát"
            },
            {
                numbertext: "10 / 10",
                image: "./assets/anhbia10.jpg",
                text: "Hình ảnh Bào Cát"
            },
        ]
    }
    init();

    var updateClock = function () {
        $scope.dateNow = new Date();
    };
    $interval(updateClock, 1);
    updateClock();
});

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