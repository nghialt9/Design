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

// nâng cao cho tag details
    // const itemsDetails = document.querySelectorAll("details"); // lấy tất cả tag details
    // function toggleAccordion() {
    //     itemsDetails.forEach(item => {
    //         if (item.open) {
    //             item.open = false; //nếu có details đang open = true thì gán ngược lại
    //         }
    //     });
    // }
    // itemsDetails.forEach(item => item.addEventListener('click', toggleAccordion, false)); // nghe sự kiện của tag details

// nâng cao cho tag details
    // <div class="accordion v3">
    //     <div class="accordion-item">
    //         <a>Làm thế nào để đăng ký mở thẻ?</a>
    //         <div class="content">
    //             <ol>
    //                 <li>Để đăng ký vay và nhận xét duyệt nhanh nhất trong ngày, bạn vui lòng điền đầy đủ thông
    //                             tin cá nhân ở FORM ĐĂNG KÝ này. <b style="font-weight:bold"> Trong vòng 24h-48h </b> Chuyên
    //             viên tư vấn Vietcredit sẽ liên hệ và hỗ trợ anh chị.
    //                 </li>
    //             </ol>
    //         </div>
    //     </div>
    // </div>
    // const items2 = document.querySelectorAll(".v3 a"); //lấy tất cả thẻ a
    // function toggleAccordion() {
    //     items2.forEach(item => {
    //         if (item.nextElementSibling.classList.contains('active')) {
    //             item.nextElementSibling.classList.remove('active'); // nếu có class active trong thẻ kế tiếp sau a (thẻ div) thì remove
    //         }
    //     });
    //     //this.classList.toggle('active');
    //     this.nextElementSibling.classList.toggle('active'); // gán class active cho thẻ kế tiếp sau a (thẻ div) đã click
    // }
    // items2.forEach(item => item.addEventListener('click', toggleAccordion)); // nghe sự kiện của tag a

// Acc stringee
    // var fromNumber = '842873030061'; //NghiaLT
    // var access_token = 'eyJjdHkiOiJzdHJpbmdlZS1hcGk7dj0xIiwidHlwIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJqdGkiOiJTS3JCSnVPZ1psNENTcVMzTGREYVdlRmZrMEE0dUZ6NlBwLTE1NjYyNjg3NTkiLCJpc3MiOiJTS3JCSnVPZ1psNENTcVMzTGREYVdlRmZrMEE0dUZ6NlBwIiwiZXhwIjoxNTY4ODYwNzU5LCJ1c2VySWQiOiJOZ2hpYUxUIn0.YuFNklkg56tS47vxdS8tQZcQ3AyD8pq5ePElYE4o09M';
    // var fromNumber = '842499966677'; //PhuocKV
	// var access_token = 'eyJjdHkiOiJzdHJpbmdlZS1hcGk7dj0xIiwidHlwIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJqdGkiOiJTS2FHOWxiOTIyQVBtZHBoRG5ORkJTcGh1UTFZM2RMZk0tMTU2NjI5NzM5NSIsImlzcyI6IlNLYUc5bGI5MjJBUG1kcGhEbk5GQlNwaHVRMVkzZExmTSIsImV4cCI6MTU2ODg4OTM5NSwidXNlcklkIjoiUGh1b2NLViJ9.FsDIxDLpspapU62twrncOqEgRcIQ3ebPxT5F9SxXUjk';
	//var fromNumber = '842477714999'; //NghiaLT99 - nghialt99@gmail.com
	//var access_token = 'eyJjdHkiOiJzdHJpbmdlZS1hcGk7dj0xIiwidHlwIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJqdGkiOiJTS3owNGxCTkxSa05yQ0QzS2RDcXZQbm9PdEprdHVWWGVGLTE1NjYzOTc2NTQiLCJpc3MiOiJTS3owNGxCTkxSa05yQ0QzS2RDcXZQbm9PdEprdHVWWGVGIiwiZXhwIjoxNTY4OTg5NjU0LCJ1c2VySWQiOiJOZ2hpYUxUOTkifQ.nym-VdP70N2WAKUYXp5PNCn0kJ_bIXtsmXizZZKfc9k';
	// var fromNumber = '842477713666'; //NghiaLT10 - nghiagiaugiangho@gmail.com
	// var access_token = 'eyJjdHkiOiJzdHJpbmdlZS1hcGk7dj0xIiwidHlwIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJqdGkiOiJTS1RKNnRSS2d1YWdwaWFJZkxTallodnRxcmo4NnJWWXRKLTE1NjYzOTk4NzgiLCJpc3MiOiJTS1RKNnRSS2d1YWdwaWFJZkxTallodnRxcmo4NnJWWXRKIiwiZXhwIjoxNTY4OTkxODc4LCJ1c2VySWQiOiJOZ2hpYUxUMTAifQ.RCK0YfX6W-S_m367mYzjyVEbcEOeaY1CWv0yA63mlek';
	// var fromNumber = '842477788808'; //NghiaLT9 - nghiagiaugiangho1990@gmail.com
	// var access_token = 'eyJjdHkiOiJzdHJpbmdlZS1hcGk7dj0xIiwidHlwIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJqdGkiOiJTS1Z0bnhhVEg1Zmlmek5wakJ4Y3M3Z2VrZlRVSmpzU2luLTE1NjY0MDAzODciLCJpc3MiOiJTS1Z0bnhhVEg1Zmlmek5wakJ4Y3M3Z2VrZlRVSmpzU2luIiwiZXhwIjoxNTY4OTkyMzg3LCJ1c2VySWQiOiJOZ2hpYUxUOSJ9.VIFt-mHiQojz7bieRyBHX89ssGshC3LjwoZGD6q9X0A';
	// var fromNumber = '842877706999'; // NghiaLT90 - lamtrongnghia1990@gmail.com
	// var access_token = 'eyJjdHkiOiJzdHJpbmdlZS1hcGk7dj0xIiwidHlwIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJqdGkiOiJTSzFlejZSdEZERlk5OEJaM01DR2U3R2xBR2tWSTltU0NGLTE1NjY0MDA5NzYiLCJpc3MiOiJTSzFlejZSdEZERlk5OEJaM01DR2U3R2xBR2tWSTltU0NGIiwiZXhwIjoxNTY4OTkyOTc2LCJ1c2VySWQiOiJOZ2hpYUxUOTAifQ.kH3SPVS1oOEfV8eKI0Du4IOP-G1PvMvLEqHUu-iP36g';
			