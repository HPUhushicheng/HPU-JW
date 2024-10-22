const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picsrc5:'https://b2cv3.a3-mall.com/static/images/common/avatar.png',
username:'',
/**single**/onetext10:'',
password:'',
/**single**/onetext13:'',

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

  	
                     
                      async dosubmit(e) {
                            let params = e.detail.value;
                         
                             let headstr = {};
                           
                             let res = await  app.request({url:"https://www.oa.cntdh.net/home/login/login_submit",method:"POST",data:params}); 
								 
							  console.log(res, "请求的结果")
                             
                 
                      },
})
