require('dotenv').config()
module.exports = {
  development: {
    username: process.env.DB_USER, // กำหนดเป็น root
    password: process.env.DB_PASS, // รหัสผ่านที่คุณให้มา
    database: process.env.DB_NAME, // ชื่อฐานข้อมูล
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, // พอร์ต MySQL
    dialect: 'mysql',
    dialectOptions: {
      charset: 'utf8mb4', // รองรับ Unicode
    },
    define: {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    },
  },
  test: {
    username: 'root',
    password: 'dssi@ubu',
    database: 'api_news_test', // กรณีใช้ฐานข้อมูลสำหรับการทดสอบ
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      charset: 'utf8mb4',
    },
    define: {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    },
    logging: false, // ปิดการบันทึก log ระหว่างการทดสอบ
  },
  production: {
    username: 'root',
    password: 'dssi@ubu',
    database: 'api_news',
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      charset: 'utf8mb4',
    },
    define: {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    },
  },
};
