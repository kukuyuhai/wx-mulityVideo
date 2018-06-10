// pages/details/details.js
import {
  video
} from '../../utils/data.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: video,
    playIndex: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.typeName,
    })
  },
  toggleToShow: function (e) {
    const idx = e.target.dataset.id;
    this.data.list[idx].isCollapse = !this.data.list[idx].isCollapse;
    this.setData({
      list: this.data.list
    })
  },
  playVideo(e) {
    //暂停上次播放
    if (this.data.playIndex) {
      var videoContextPrev = wx.createVideoContext(`video-${this.data.playIndex}`)
      videoContextPrev.seek(0)
      videoContextPrev.pause()
    }
    const id = e.currentTarget.dataset.id;
    const index = e.currentTarget.dataset.index;
    this.data.list.forEach(n => {
      n.isPlaying = false;
    })
    console.log(index)
    this.data.list[index].isPlaying = true;
    let videoContext = wx.createVideoContext(`video-${id}`)
    videoContext.play()

    this.setData({
      list: this.data.list,
      playIndex: id
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})