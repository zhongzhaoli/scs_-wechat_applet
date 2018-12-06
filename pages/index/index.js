//index.js
//获取应用实例
const app = getApp()

const api = require('../../api.js');
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    job: "dsadsa",
  },
  onLoad: function () {
    let that = this;
    api.job_list().then(function(mes){
        that.data.job = mes;
        console.log(that.data.job);
    });
  },
})
