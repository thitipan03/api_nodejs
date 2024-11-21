'use strict';

const { underscoredIf } = require("sequelize/lib/utils");

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
    // กำหนดฟิลด์ 'id' เป็น UUID ซึ่งจะเป็น Primary Key
    id: {
      type: DataTypes.UUID,         // กำหนดชนิดข้อมูลเป็น UUID
      defaultValue: DataTypes.UUIDV4,  // สร้าง UUID อัตโนมัติเมื่อสร้างข้อมูลใหม่ โดยใช้เวอร์ชัน 4 (สุ่ม)
      primaryKey: true               // กำหนดเป็น Primary Key ของโมเดล
    },
  
    // ชื่อสินค้า
    name: {
      type: DataTypes.STRING,        // ชนิดข้อมูลเป็นสตริง (STRING)
      allowNull: false,              // ห้ามเป็นค่าว่าง (null)
    },
  
    // ราคา
    price: {
      type: DataTypes.FLOAT,         // ชนิดข้อมูลเป็นเลขทศนิยม (FLOAT)
      allowNull: false,              // ห้ามเป็นค่าว่าง
      validate: {
        isFloat: true,               // ตรวจสอบว่าค่าที่กรอกเป็นตัวเลขทศนิยม
        min: 0,                      // กำหนดให้ราคาเริ่มต้นต้องไม่น้อยกว่า 0
      }
    }
  }, {
    timestamps: true,                // เพิ่มฟิลด์ 'createdAt' และ 'updatedAt' อัตโนมัติ
    tableName: 'products',            // กำหนดชื่อของตารางเป็น 'products'
    underscored: true
  }
)
    return Product
};
  