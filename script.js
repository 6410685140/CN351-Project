// script.js
const form = document.querySelector('#myForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const urlEncoded = new URLSearchParams(formData).toString();

    fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: urlEncoded,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    }).then(data => {
        console.log(data); // แสดงผลการตอบสนองจากเซิร์ฟเวอร์
        alert('Data saved successfully'); // แสดง Alert เมื่อข้อมูลถูกบันทึก
    }).catch(error => {
        console.error('Error:', error);
    });
});
