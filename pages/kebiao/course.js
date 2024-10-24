const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data3List: [{ "name": "首页", "imgtype": 1, "iconcolor": "black", "iconname": "cuIcon-home", "url": "", "pic": "../../images/touxiang/home.png", "desc": "", "image": "../../images/touxiang/home.png" }, { "name": "专属客服", "imgtype": 1, "iconcolor": "black", "iconname": "cuIcon-home", "url": "", "pic": "../../images/touxiang/kefu.png", "desc": "", "image": "../../images/touxiang/kefu.png" }, { "name": "我的", "imgtype": 1, "iconcolor": "black", "iconname": "cuIcon-home", "url": "", "pic": "../../images/touxiang/more.png", "desc": "", "image": "../../images/touxiang/more.png" }],
    CustomBar: app.globalData.CustomBar

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

  },

  goHome() {
    wx.navigateTo({
      url: '/pages/zhuye/zhuye' // 跳转到首页
    });
  },

  goCustomerService() {
    wx.navigateTo({
      url: '/pages/kebiao/course' // 跳转到客服页面
    });
  },

  goMyPage() {
    wx.navigateTo({
      url: '/pages/user/setting' // 跳转到我的页面
    });
  }

  
})
