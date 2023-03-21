// pages/document/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    role:'',
    name:'',
    student_id:'',
    recordList:'',
    studentList:''
  },
  //判断身份
  getRole(){
    let role=wx.getStorageSync('role')
    this.setData({
      role:role
    })
    if (role=='学生') {
      this.SelectStudent()
    } else {
      this.SelectAll()
    }
  },
  //查询学生签到记录
  SelectStudent(){
    let that = this
    let name = wx.getStorageSync('name');
    let student_id = wx.getStorageSync('student');
    this.setData({
      name:name,
      student_id:student_id
    })
    let data = {
      name:this.data.name,
      student_id:this.data.student_id
    }
    wx.request({
      url: 'http://localhost:8080/sign/select/student',
      method:'POST',
      header: {
        'content-type': 'application/json' 
      },
      data:data,
      dataType:"json",
      success(res){
        // console.log(res.data);
        that.setData({
          recordList:res.data
        })
      }
    })
  },
  //根据课程ID查询学生签到记录
  SelectAll(){
    let that = this
    let course_id = wx.getStorageSync('course_id');
    wx.request({
      url: 'http://localhost:8080/select/'+course_id,
      method:'GET',
      header: {
        'content-type': 'application/json' 
      },
      data: {
        studentList:"list"
      },
      dataType:"json",
      success(res){
        // console.log(res.data);
        that.setData({
          studentList:res.data
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
      active: 2
    });
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
    this.onLoad()
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