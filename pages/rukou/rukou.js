const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        picsrc10: 'https://php2.diyhey.com//uploads/store/comment/20240426/dd124474ed7559b499f342d0db8d4dca.png',
        picsrc17: 'https://php2.diyhey.com//uploads/store/comment/20240426/b3b24391561755735ab198aed6c67b83.png',
        picsrc24: 'https://php2.diyhey.com//uploads/store/comment/20240426/bda8ea23fa5e3322e86caf2e84922d98.png',
        picsrc31: 'https://php2.diyhey.com//uploads/store/comment/20240426/932fca4421eeaa985e8eded8f9680c5a.png',
        picsrc38: 'https://php2.diyhey.com//uploads/store/comment/20240426/dd124474ed7559b499f342d0db8d4dca.png',
        picsrc45: 'https://php2.diyhey.com//uploads/store/comment/20240426/dd124474ed7559b499f342d0db8d4dca.png',
        picsrc52: 'https://php2.diyhey.com//uploads/store/comment/20240426/dd124474ed7559b499f342d0db8d4dca.png',
        picsrc59: 'https://php2.diyhey.com//uploads/store/comment/20240426/dd124474ed7559b499f342d0db8d4dca.png',
        picsrc66: 'https://php2.diyhey.com//uploads/store/comment/20240426/bda8ea23fa5e3322e86caf2e84922d98.png',
        picsrc73: 'https://php2.diyhey.com//uploads/store/comment/20240426/932fca4421eeaa985e8eded8f9680c5a.png',

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