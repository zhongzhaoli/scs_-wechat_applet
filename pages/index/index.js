//Api类
const api = require('../../api.js'); 
//工具类
const util = require('../../utils/util.js');

Page({
  data: {
    job_over: "",
    job_adopt: "",
    loading: false,
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '兼职列表-云屯务集'  //修改title
    })
    util.loading(this);
    let that = this;
    api.job_list().then(function(mes){
      util.close_dialog(that);        
      that.setData({
        job_over: mes.data.over,
        job_adopt: mes.data.adopt
      })
    });
  },
  to_Url: function(event){
    wx.navigateTo({
      url: '../index_detail/index_detail?id=' + event.currentTarget.id,
    })
  }
})
