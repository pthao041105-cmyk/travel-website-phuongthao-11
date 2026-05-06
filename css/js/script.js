function chooseTour(tourName) {
    var message = document.getElementById("tourMessage");

    message.innerHTML = "Bạn đã chọn tour " + tourName;
    message.style.color = "#0077b6";
}

function checkBookingForm(event) {
    event.preventDefault();

    var fullname = document.getElementById("fullname").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var email = document.getElementById("email").value.trim();
    var destination = document.getElementById("destination").value;
    var date = document.getElementById("date").value;
    var people = document.getElementById("people").value;
    var message = document.getElementById("bookingMessage");

    if (fullname === "") {
        message.innerHTML = "Vui lòng nhập họ tên";
        message.style.color = "red";
        return;
    }

    if (phone === "") {
        message.innerHTML = "Vui lòng nhập số điện thoại";
        message.style.color = "red";
        return;
    }

    if (email === "") {
        message.innerHTML = "Vui lòng nhập email";
        message.style.color = "red";
        return;
    }

    if (destination === "") {
        message.innerHTML = "Vui lòng chọn điểm đến";
        message.style.color = "red";
        return;
    }

    if (date === "") {
        message.innerHTML = "Vui lòng chọn ngày đi";
        message.style.color = "red";
        return;
    }

    if (people === "" || Number(people) <= 0) {
        message.innerHTML = "Số người phải lớn hơn 0";
        message.style.color = "red";
        return;
    }

    message.innerHTML = "Đặt tour thành công";
    message.style.color = "green";
}