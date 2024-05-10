document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("booking-form");
    const bookingsTable = document.querySelector("#bookings-table table tbody");
    const addBookingButton = document.getElementById("add-booking");
  
    addBookingButton.addEventListener("click", function () {
      // استخراج البيانات من نموذج 
      const formData = new FormData(bookingForm);
      const date = formData.get("date");
      const time = formData.get("time");
      const barber = formData.get("barber");
      const service = formData.get("service");
      const yourname = formData.get("yourname");

      function isValidName(name) {
        return /^[a-zA-Zأ-ي\s]*$/.test(name);
      }
      if (!time) {
        alert("يرجى اختيار الوقت.");
        return;
      } 
      if (!date) {
        alert("يرجى اختيار التاريخ.");
        return;
      }
      const today = new Date().toISOString().split('T')[0]; // تاريخ اليوم
    if (date < today) {
      alert("لا يمكن اختيار تواريخ ماضية.");
      return;
    }
    if (!yourname){
      alert("يرجي ادخال الاسم");
      return;
    } 
    if (!isValidName(yourname)) {
      alert("يرجى إدخال اسم صحيح (يحتوي فقط على حروف ومسافات).");
      clientNameInput.value = ''; // إفراغ حقل اسم العميل
      return;
    }

      // التحقق من تكرار المواعيد
      const existingBookings = Array.from(bookingsTable.querySelectorAll("tr")).map(row => row.cells[0].textContent);
      const newDateTime = `${date} ${time}`;
      if (existingBookings.includes(newDateTime)) {
        alert("هذا الموعد محجوز بالفعل، يرجى اختيار موعد آخر.");
        return;
      }
  
      // إضافة الحجز إلى جدول الحجوزات
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${newDateTime}</td>
        <td>${barber}</td>
        <td>${service}</td>
        <td>${yourname}</td>
      `;
      bookingsTable.appendChild(newRow);
  
      // إعادة تعيين نموذج الحجز
      bookingForm.reset();
    });
  });
  