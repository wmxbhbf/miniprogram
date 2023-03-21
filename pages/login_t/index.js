import {
  request
} from '../../request/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    UserName: '',
    UserPassWord: ''
  },
  // 获取输入帐号
  getUserName(event){
    // console.log("获取输入帐号",event.detail);
    this.setData({
      UserName:event.detail
    })
  },
  // 获取输入密码
  getUserPassWord(event){
    // console.log("获取输入密码",event.detail);
    this.setData({
      UserPassWord:event.detail
    })
  },
  // 点击登陆
  login(){
    let data = {
      username: this.data.UserName,
      password: this.data.UserPassWord,
    }
    request({
      url: '/teacher/Login',
      data: data,
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
    }).then(res => {
      // console.log(res);
      if (res) {
        wx.showToast({
          title: '登录成功',
          icon: 'succcess'
        })
        wx.setStorageSync('teacher', res.id)
        wx.setStorageSync('myname', res.username)
        wx.setStorageSync('role', res.role)
        // console.log(res.username);
        setTimeout(() => {
          wx.switchTab({
            url: '/pages/index_s/index',
          })
        }, 1000)
      } else {
        wx.showToast({
          title: '账号或密码错误',
          icon: 'error'
        })
      }

    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})