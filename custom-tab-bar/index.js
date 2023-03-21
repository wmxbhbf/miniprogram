// custom-tab-bar/index.js
Component({
  data: {
    active:0,
    list: [
      {
        "pagePath": "/pages/index_s/index",
        "text": "首页"
      },{
        "pagePath": "/pages/record_s/index",
        "text": "签到"
      },{
        "pagePath": "/pages/document/index",
        "text": "记录"
      },{
        "pagePath": "/pages/mine_s/index",
        "text": "我的"
      }
    ]
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onChange(e) {
      // e.detail 的值为当前选中项的索引
      let index = e.detail;
      this.setData({
        active: index
      })
      wx.switchTab({
        url: this.data.list[index].pagePath,
      })
    },
  }
})
