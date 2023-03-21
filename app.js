// app.js
App({
  onLaunch:function() {
    wx.cloud.init({
      env:"miniprogram-2-4gk0dmu8c0418953",
      traceUser: true,
    })
    this.globalData = {};
  }
})
