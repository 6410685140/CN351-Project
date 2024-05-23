// database.js
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('data.db'); // ใช้ไฟล์ data.db แทน :memory:

db.serialize(() => {
  // สร้างตารางถ้ายังไม่มี
  db.run(`CREATE TABLE IF NOT EXISTS form_data (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL
  )`);

  // เพิ่มข้อมูลเบื้องต้น (ถ้ายังไม่มี)
//   db.run(`INSERT INTO form_data (firstName, lastName) VALUES ('John', 'Doe')`);
//   db.run(`INSERT INTO form_data (firstName, lastName) VALUES ('Jane', 'Doe')`);
});

module.exports = db;
