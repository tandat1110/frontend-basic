// Khai báo biến
var fullName = "Nguyễn Tấn Đạt";
var age = 21;

// Câu lệnh hiển thị thông báo:
alert(fullName);
alert(age);

/*
 console.warn(fullName); là in ra cảnh báo
 console.error(fullName); là in ra lỗi
 console.log("123");*/

/*
  confirm('Xác nhận độ tuổi'); là dùng để xác nhận thông tin
 */

/*
   prompt('Xác nhận bạn đủ tuổi'); dùng để xác nhận và có ô input 
  */

/*Cú pháp: dùng để chạy sau 1 khoảng thời gian
    setTimeout(function() {}, thời gian chạy bằng mili giây );

    Ví dụ: 
   setTimeout(function() {
        alert('Thong bao');
   }, 1000);
   */

/*Cú pháp: dùng để chạy sau 1 khoảng thời gian liên tục lặp đi lặp lại
    setTimeout(function() {}, thời gian chạy bằng mili giây );
   
    Ví dụ:
    setInterval(function() {
   console.log('Day la log' + Math.random)
}, 1000);
*/

/*
    Toán tử trong Javascript
    1. Toán tử số học - Arithmetic
        Ví dụ: var a=1+2;
        console.log(a);

    2. Toán tử gán - Assignment
        Ví dụ: var fullName = 'Nguyen tan dat';

    3. Toán tử so sánh - Comparison
        Ví dụ: var a=1;
                var b=2;
                if(a>b){
                alert('Dung');
                }
    4. Toán tử logic - Logical
        Ví dụ: var a=1;
                var b=2;
                if(a>0 && b>0){
                alert('a&b lớn hơn 0')
                }
*/

