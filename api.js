module.exports = {
  server_host: "https://api.yuntunwj.com/scs/public",
  api_fun: function (url, data, type) {
    var promise = new Promise(function (suc, err) {
      wx.request({
        url: url,
        data: data,
        type: type,
        success: (mes) => {
          suc(mes);
        },
        error: (err) => {
          err(err);
        }
      })
    })
    return promise;
  },
  job_list: function (data = {}) {
    var url = this.server_host + "/job";
    return this.api_fun(url, data, 'get');
  },
}