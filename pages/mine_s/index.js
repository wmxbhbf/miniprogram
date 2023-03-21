// pages/mine_s/mine_s.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      myid:'',
      myname:'',
      role:'',
    },
    //学生
    mine_s(){
      let myid = wx.getStorageSync('student');
      let myname = wx.getStorageSync('myname');
      this.setData({
        myid:myid,
        myname:myname,
      })
    },
    //教师
    mine_t(){
      let myid = wx.getStorageSync('teacher')
      let myname = wx.getStorageSync('myname')
      this.setData({
        myid:myid,
        myname:myname,
      })
    },
    //判断身份
    getRole(){
      let role=wx.getStorageSync('role');
      if (role=='学生') {
        this.mine_s()
      } else {
        this.mine_t()
      }
    },

    //退出登录
    clear(){
      wx.clearStorageSync();
      wx.showToast({
        title: '退出登录成功',
        icon: 'none',
        duration:2000,
        success(res){
          wx.reLaunch({
            url: '/pages/login/index',
          })
        }
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      this.getRole()
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
      this.getTabBar().setData({
        active: 3
      })
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