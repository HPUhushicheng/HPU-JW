const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgpic4: 'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1',
    bgpic25: 'https://php2.diyhey.com/uploads/store/comment/20231230/31c0bc033c9ddef199a139675b3cfc13.png',
    data32List: [{ "name": "修改学号", "imgtype": 1, "iconcolor": "black", "iconname": "cuIcon-home", "url": "", "pic": "../../images/touxiang/xinxi.png", "desc": "", "image": "../../images/touxiang/xinxi.png" }, { "name": "修改密码", "imgtype": 1, "iconcolor": "black", "iconname": "cuIcon-home", "url": "", "pic": "../../images/touxiang/ziliao.png", "desc": "", "image": "../../images/touxiang/ziliao.png" }, { "name": "专属客服", "imgtype": 1, "iconcolor": "black", "iconname": "cuIcon-home", "url": "", "pic": "../../images/touxiang/pinglun.png", "desc": "", "image": "../../images/touxiang/pinglun.png" }, { "name": "常见问题", "imgtype": 1, "iconcolor": "black", "iconname": "cuIcon-home", "url": "", "pic": "../../images/touxiang/wenti.png", "desc": "", "image": "../../images/touxiang/wenti.png" }],
    data3List: [
      { "name": "首页", "imgtype": 1, "iconcolor": "black", "iconname": "cuIcon-home", "url": "/pages/zhuye/zhuye", "pic": "../../images/touxiang/home.png", "desc": "", "image": "../../images/touxiang/home.png" },
      { "name": "专属客服", "imgtype": 1, "iconcolor": "black", "iconname": "cuIcon-home", "url": "/pages/customer_service/customer_service", "pic": "../../images/touxiang/kefu.png", "desc": "", "image": "../../images/touxiang/kefu.png" },
      { "name": "我的", "imgtype": 1, "iconcolor": "black", "iconname": "cuIcon-home", "url": "/pages/user/setting", "pic": "../../images/touxiang/more.png", "desc": "", "image": "../../images/touxiang/more.png" }
    ],
    /**vuejs**/

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

  goclick32(e) {
    const index = e.currentTarget.dataset.index; // 获取点击的索引
    const url = this.data.data3List[index].url; // 获取对应的 URL
    if (url) {
      wx.navigateTo({
        url: url // 跳转到指定页面
      });
    }
  }

})
