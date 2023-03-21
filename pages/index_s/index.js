
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    active: 0,
    imageURL: '/images/语文.png',
    myid: '',
    myname:'',
    role:'',
    mydata: [],
    datalist: [],
    teacherdatalist:[],

    teacherdata:[],
    studentlist:[],
    record:[]
  },
  //添加课程
  addcourse(event){
    let that = this;
    let index = event.currentTarget.dataset.index;
    // console.log('列表索引',event);
    // console.log('索引值',index);
    let course_id = this.data.datalist[index].id;
    let teacher_id = this.data.datalist[index].teacherId;
    let student_id = wx.getStorageSync('student');
    wx.request({
      url: 'http://localhost:8080/add/addCourse',
      method:'POST',
      header: {
        'content-type': 'application/json' 
      },
      data:{
        courseId:course_id,
        teacherId:teacher_id,
        studentId:student_id
      },
      success(res){
        console.log(res.data);
        if (res.data=='1') {
          wx.showToast({
            title: '添加成功',
            icon: 'succcess'
          })
          that.onLoad()
        } else {
          wx.showToast({
            title: '添加失败',
            icon: 'error'
          })
        }
      }
    })
  },
  //跳转签到
  goRecord(event){
    let index = event.currentTarget.dataset.index;
    let course_id = this.data.mydata[index].course_id;
    let name = this.data.mydata[index].name;
    wx.setStorageSync('course_id', course_id)
    wx.setStorageSync('name', name)
    wx.switchTab({
      url: '/pages/record_s/index',
    })
  },

  //跳转查看签到记录
  goSelect(event){
    let index = event.currentTarget.dataset.index;
    let course_id = this.data.mydata[index].course_id;
    let name = this.data.mydata[index].name;
    wx.setStorageSync('course_id', course_id)
    wx.setStorageSync('name', name)
    wx.switchTab({
      url: '/pages/document/index',
    })
  },
  
  // 课程列表  
  getAddCourse() {
    let that = this
    wx.request({
      url: 'http://localhost:8080/course',
      method:"GET",
      header: {
        'content-type': 'application/json' // 默认值
      },
      data:{
        datalist:"courses"
      },
      dataType:"json",
      success(res){
        // console.log(res.data);
        that.setData({
          datalist:res.data
        })
      },
    })
  },
  
  // 我的课程 (学生)
  getDatalist() {
    let that=this;
    let myid=wx.getStorageSync('student');
    let role=wx.getStorageSync('role');
    wx.request({
      url: 'http://localhost:8080/mycourse/'+myid,
      method:"GET",
      header: {
        'content-type': 'application/json' 
      },
      data:{
        mydata:"studentCourse"
      },
      dataType:"json",
      success(res){
        // console.log(res.data);
        that.setData({
          mydata:res.data
        })
      },
    })
    
  },

  // 我的课程 (教师)
  getTeacherData(){
    let that = this;
    let myid = wx.getStorageSync('teacher');
    wx.request({
      url: 'http://localhost:8080/course/'+myid,
      method:"GET",
      header: {
        'content-type': 'application/json' // 默认值
      },
      data:{
        teacherdata:"teacherdata"
      },
      dataType:"json",
      success(res){
        // console.log(res.data[0].id);
        wx.setStorageSync('course_id',res.data[0].id)
        that.setData({
          teacherdata:res.data
        })
      },
    })
  },
  // 查看学生 
  getStudentList(){
    let that = this;
    let myid = wx.getStorageSync('teacher');
    wx.request({
      url: 'http://localhost:8080/mycourse/teacher/'+myid,
      method:"GET",
      header: {
        'content-type': 'application/json' // 默认值
      },
      data:{
        studentlist:"studentList"
      },
      dataType:"json",
      success(res){
        // console.log(res.data);
        that.setData({
          studentlist:res.data
        })
      },
    })
  },

  // 判断身份进行条件渲染
  getRole(){
    let role=wx.getStorageSync('role');
    if (role=='学生') {
      this.getAddCourse() // 课程列表 
      this.getDatalist()  // 我的课程
    } else {
      this.getTeacherData()  // 我的课程
      this.getStudentList()  // 查看学生 
    }
  },

  onChange(event) {},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let role=wx.getStorageSync('role')
    // console.log('身份',role);
    this.setData({
      role:role
    })
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
      active: 0
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    // console.log('加载更多');
    // this.getDatalist()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})