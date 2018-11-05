/**
 * TODO:
 *  优化提交反馈、限制反馈数量 - OK
 *  更改主题颜色
 *  写分享
 *  定时清理数据库
 */

// 云函数入口文件
const cloud = require('wx-server-sdk')
const axios = require('axios')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let r = await axios.get(`http://139.219.13.39:8088/addRemind?openID=${event.userInfo.openId}&remindCount=${event.remindCount}&formID=${event.formID}`);
  return r.data;
}