//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          if (res.code) {
            const code_url = "https://api.weixin.qq.com/sns/jscode2session?appid=wx32337a4626fce0ff&secret=5d4f7566e5bf4f42a300b17bef1d8cd4&js_code=" + res.code + "&grant_type=authorization_code";
            wx.request({
              url: code_url,
              data: {},
              method: "GET",
              success: function (res) {
                console.log(res)
              }
            })
          }
        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
        else{
          wx.openSetting();
        }
      }
    })
  },
  globalData: {
    userInfo: null,
  }
})