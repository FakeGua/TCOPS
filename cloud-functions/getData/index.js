/**
 *  云函数入口文件
 */
const cloud = require('wx-server-sdk')

const mysql = require('mysql')

/**
 *  连接测试
 */

// let connection = mysql.createConnection({
//   host: '139.219.13.39',
//   user: 'root',
//   password: '12345687',
//   database: 'TCOPS'
// });

// new Promise((resolve, reject) => {
//   connection.connect(err => {
//     if (err) {
//       reject(err);
//     };
//   });
//   connection.query('SELECT * from data_table ORDER BY id DESC LIMIT 5', (error, results, fields) => {
//     if (error) {
//       reject(error);
//     } else {
//       resolve(results);
//     };
//   });
//   connection.end();
// }).then(results => {
//   console.log(results);
// }).catch(error => {
//   console.log(error);
// })


cloud.init();

/**
 *  云函数入口函数
 */
exports.main = async (event, context) => {
  return new Promise((resolve, reject) => {
    let db = mysql.createConnection({
      host: '139.219.13.39',
      user: 'root',
      password: '12345687',
      database: 'TCOPS'
    });
    db.connect(err => {
      if (err) {
        reject(err);
      };
    });
    db.query('SELECT * from data_table ORDER BY id DESC LIMIT 5', (error, data, fields) => {
      if (error) {
        reject(err);
      } else {
        resolve(data);
      };
    });
    db.end();
  })
}