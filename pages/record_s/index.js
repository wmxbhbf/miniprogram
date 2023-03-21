import QQMapWX from '../../qqmap-wx-jssdk1.2/qqmap-wx-jssdk';
var qqmapsdk = new QQMapWX({
  key:'C5XBZ-V3UCQ-OBS5O-G5CSR-TLTAQ-BIBWL'
});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    role:'',
    longitude:'',
    latitude:'',
    course_id:'',
    create_time:'',
    place:[],
    distance:'',
    call_id:'',
    student_id:''
  },

  //判断身份
  getRole(){
    let role=wx.getStorageSync('role')
    this.setData({
      role:role
    })
    // console.log('身份',role);
  },
  //获取位置(教师)
  getMap(){
    let that = this
    wx.chooseLocation({
      success(res){
        // console.log(res);
        that.setData({
          latitude:res.latitude,
          longitude:res.longitude
        })
      }
    })
    this.getNowDate()
  },

  //获取当前时间
  getNowDate() {
    let that = this
    var date = new Date();
    var year = date.getFullYear() //年
    var month = date.getMonth() + 1//月
    var day = date.getDate()//日

    var hour = date.getHours()//时
    var minute = date.getMinutes()//分
    var second = date.getSeconds()//秒

    var xiaoshi = "";
    if (hour < 10) {
        xiaoshi = "0" + hour;
    } else {
        xiaoshi = hour + "";
    }

    var fenzhong = "";
    if (minute < 10) {
        fenzhong = "0" + minute;
    } else {
        fenzhong = minute + "";
    }

    var miao = "";
    if (second < 10) {
        miao = "0" + second;
    } else {
        miao = second + "";
    }
    // console.log(year + '-' + month + '-' + day + ' ' + xiaoshi + ':' + fenzhong + ':' + miao);
    let nowTime = year + '-' + month + '-' + day + ' ' + xiaoshi + ':' + fenzhong + ':' + miao
    that.setData({
      create_time: nowTime
    })
    // console.log('当前时间',nowTime);
    
  },

  //开始签到(教师)
  Record(){
    let course_id = wx.getStorageSync('course_id')
    // console.log(id);
    this.setData({
      course_id:course_id
    })
    // console.log('当前时间',this.data.create_time);
    let data = {
      longitude: this.data.longitude,
      latitude: this.data.latitude,
      course_id: this.data.course_id,
    }
    wx.request({
      url: 'http://localhost:8080/call/submit',
      method:'POST',
      header: {
        'content-type': 'application/json' 
      },
      data:data,
      success (res) {
        let back = res.data
        if (back=='1') {
          wx.showToast({
            title: '提交成功',
            icon: 'succcess'
          })
        } else {
          wx.showToast({
            title: '提交失败',
            icon: 'error'
          })
        }
      }
    })
  },

  //学生签到
  //获取课程ID
  getInformation(){
    let that = this
    let course_id = wx.getStorageSync('course_id')
    // console.log('课程ID',course_id);
    wx.request({
      url: 'http://localhost:8080/call/getdata/'+course_id,
      method:'GET',
      header:{
        'content-type': 'application/json'
      },
      data:{
        place:"place"
      },
      dataType:"json",
      success(res){
        // console.log('地理位置',res.data);
        // console.log('call_id',res.data[0].id);
        that.setData({
          place:res.data[0],
          call_id:res.data[0].id
        })
      }
    })
  },
  //计算距离,验证签到
  getContrast(){
    let that = this
    let lng1 = this.data.place.longitude;
    let lat1 = this.data.place.latitude;
    let lng2 = this.data.longitude;
    let lat2 = this.data.latitude;
    qqmapsdk.calculateDistance({
      mode:'straight',
      from:{
        latitude:lat2,
        longitude:lng2
      },
      to:[{
        latitude:lat1,
        longitude:lng1
      }],
      success(res){
        that.setData({
          distance:res.result.elements[0].distance+'米'
        })
      }
    })
    let distance = this.data.distance
    distance = parseInt(distance) //将字符串转换为数字
    let student_id = wx.getStorageSync('student');
    that.setData({
      student_id:student_id
    })
    if (distance<=200) {
      let data = {
        call_id:that.data.call_id,
        student_id:that.data.student_id,
        username:wx.getStorageSync('myname'),
        name:wx.getStorageSync('name'),
        state:'签到成功'
      }
      wx.request({
        url:'http://localhost:8080/sign/submit',
        method:'POST',
        header:{
          'content-type': 'application/json'
        },
        data:data,
        success(res){
          wx.showToast({
            title: '签到成功',
            icon: 'succcess'
          })
        }
      })
    } else {
      wx.showToast({
        title: '签到失败，你不在签到范围',
        icon: 'error'
      })
    }
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
      active: 1
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