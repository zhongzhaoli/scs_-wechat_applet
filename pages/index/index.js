//index.js
//获取应用实例
const app = getApp()

const api = require('../../api.js');
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    job_over: "",
    job_adopt: "",
  },
  onLoad: function () {
    let that = this;
    api.job_list().then(function(mes){
      that.setData({
        job_over: mes.data.over,
        job_adopt: mes.data.adopt
      })
    });
  },
})
