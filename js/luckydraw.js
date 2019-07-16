angular.module('app', [])
    .controller('appCtrl', function($scope, $interval) {
        //khởi tạo hàm chạy và khai báo biến
        var init = function() {
            $scope.slidesShow = [{
                    stt: "1",
                    ten: "Nguyễn Văn A",
                    sohd: "APPLP330395",
                    tinh: "Vũng Tàu",
                    sdt: "0922334455",
                    giai: "Nhất"
                },
                {
                    stt: "2",
                    ten: "Nguyễn Văn A",
                    sohd: "APPLP330395",
                    tinh: "Vũng Tàu",
                    sdt: "0922334455",
                    giai: "Nhất"
                },
                {
                    stt: "3",
                    ten: "Nguyễn Văn A",
                    sohd: "APPLP330395",
                    tinh: "Vũng Tàu",
                    sdt: "0922334455",
                    giai: "Nhất"
                },
                {
                    stt: "4",
                    ten: "Nguyễn Văn A",
                    sohd: "APPLP330395",
                    tinh: "Vũng Tàu",
                    sdt: "0922334455",
                    giai: "Nhất"
                },
                {
                    stt: "5",
                    ten: "Nguyễn Văn A",
                    sohd: "APPLP330395",
                    tinh: "Vũng Tàu",
                    sdt: "0922334455",
                    giai: "Nhất"
                },
                {
                    stt: "6",
                    ten: "Nguyễn Văn A",
                    sohd: "APPLP330395",
                    tinh: "Vũng Tàu",
                    sdt: "0922334455",
                    giai: "Nhất"
                },
                {
                    stt: "7",
                    ten: "Nguyễn Văn A",
                    sohd: "APPLP330395",
                    tinh: "Vũng Tàu",
                    sdt: "0922334455",
                    giai: "Nhất"
                },
                {
                    stt: "8",
                    ten: "Nguyễn Văn A",
                    sohd: "APPLP330395",
                    tinh: "Vũng Tàu",
                    sdt: "0922334455",
                    giai: "Nhất"
                },
                {
                    stt: "9",
                    ten: "Nguyễn Văn A",
                    sohd: "APPLP330395",
                    tinh: "Vũng Tàu",
                    sdt: "0922334455",
                    giai: "Nhất"
                },
                {
                    stt: "10",
                    ten: "Nguyễn Văn A",
                    sohd: "APPLP330395",
                    tinh: "Vũng Tàu",
                    sdt: "0922334455",
                    giai: "Nhất"
                },
                {
                    stt: "11",
                    ten: "Nguyễn Văn A",
                    sohd: "APPLP330395",
                    tinh: "Vũng Tàu",
                    sdt: "0922334455",
                    giai: "Nhất"
                },
                {
                    stt: "12",
                    ten: "Nguyễn Văn A",
                    sohd: "APPLP330395",
                    tinh: "Vũng Tàu",
                    sdt: "0922334455",
                    giai: "Nhất"
                },
                {
                    stt: "13",
                    ten: "Nguyễn Văn A",
                    sohd: "APPLP330395",
                    tinh: "Vũng Tàu",
                    sdt: "0922334455",
                    giai: "Nhất"
                },
                {
                    stt: "14",
                    ten: "Nguyễn Văn A",
                    sohd: "APPLP330395",
                    tinh: "Vũng Tàu",
                    sdt: "0922334455",
                    giai: "Nhất"
                },
                {
                    stt: "15",
                    ten: "Nguyễn Văn A",
                    sohd: "APPLP330395",
                    tinh: "Vũng Tàu",
                    sdt: "0922334455",
                    giai: "Nhất"
                },
                {
                    stt: "16",
                    ten: "Nguyễn Văn A",
                    sohd: "APPLP330395",
                    tinh: "Vũng Tàu",
                    sdt: "0922334455",
                    giai: "Nhất"
                },
                {
                    stt: "17",
                    ten: "Nguyễn Văn A",
                    sohd: "APPLP330395",
                    tinh: "Vũng Tàu",
                    sdt: "0922334455",
                    giai: "Nhất"
                },
                {
                    stt: "18",
                    ten: "Nguyễn Văn A",
                    sohd: "APPLP330395",
                    tinh: "Vũng Tàu",
                    sdt: "0922334455",
                    giai: "Nhất"
                },
                {
                    stt: "19",
                    ten: "Nguyễn Văn A",
                    sohd: "APPLP330395",
                    tinh: "Vũng Tàu",
                    sdt: "0922334455",
                    giai: "Nhất"
                },
            ]
        }

        //chạy hàm khởi tạo
        init();
    });
    angular.element(document).ready(function() {
        $("#startDay").datepicker({
            dateFormat: "dd/mm/yy"
        });
        $("#endDay").datepicker({
            dateFormat: "dd/mm/yy"
        });
    
        var newdate = new Date();
        var dd = newdate.getDate();
        var mm = newdate.getMonth() + 1;
        var y = newdate.getFullYear();
        var someFormattedDate = (dd > 9 ? dd : '0' + dd) + '/' + (mm > 9 ? mm : '0' + mm) + '/' + y;
        document.getElementById('startDay').value = someFormattedDate;
    
        var newdate1 = new Date("01/25/2020");
        var dd1 = newdate1.getDate();
        var mm1 = newdate1.getMonth() + 1;
        var y1 = newdate1.getFullYear();
        var someFormattedDate1 = (dd1 > 9 ? dd1 : '0' + dd1) + '/' + (mm1 > 9 ? mm1 : '0' + mm1) + '/' + y1;
        document.getElementById('endDay').value = someFormattedDate;
    
        caldate();
    });