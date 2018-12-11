//Api类
const api = require('../../api.js');
//工具类
const util = require('../../utils/util.js');
Page({
  data: {
    sj: "",
    loading: false,
  },
  onLoad: function (option) {
    wx.setNavigationBarTitle({
      title: '兼职详细-云屯务集'  //修改title
    })
    this.get_sj(option);
  },
  get_sj: function (option){
    util.loading(this);
    let job_id = option.id;
    let that = this;
    api.job_detail(job_id).then(function (t) {
      util.close_dialog(that);
      console.log(t);
    });
  }
})