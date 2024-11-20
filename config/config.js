

module.exports = {
  development: {
    username: 'root', // กำหนดเป็น root
    password: 'dssi@ubu', // รหัสผ่านที่คุณให้มา
    database: 'api_news', // ชื่อฐานข้อมูล
    host: '127.0.0.1',
    port: 3306, // พอร์ต MySQL
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
