var app = getApp();
Page({
  data: {
    
  },


  onLoad: function () {
    this.setData({
      year: new Date().getFullYear()
    });
  },
  onShow: function () {

  },
  onReady: function () {
    
  },
  jumpindex:function(){
    wx.switchTab({
        url: '../index/index',
      })
  }
  
});