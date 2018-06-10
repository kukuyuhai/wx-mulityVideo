//index.js
//获取应用实例
import {
  video
} from '../../utils/data.js'
const app = getApp()

Page({
  data: {
    list: video,
    playIndex: null,
    winHeight: 0,
    currentIndex: 0,
    isLoading: true,
    typies: [{
        type: "zgzr",
        count: 24,
        name: '中国职人',
        thumb:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528631234006&di=5a928c7e9e7934d66d6dd836a8a770f4&imgtype=0&src=http%3A%2F%2Fmvimg1.meitudata.com%2F55852f20aa4a12211.jpg",
        lastTime: '03:00'
      },
      {
        type: "rw",
        count: 46,
        name: '人物',
        thumb: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528635890823&di=7397d003f1c2ebf12282c3a198e70c00&imgtype=0&src=http%3A%2F%2Fimg.besoo.com%2Ffile%2F201705%2F25%2F1050098545908.png",
        lastTime: '03:00'
      },
      {
        type: "zz",
        count: 12,
        name: '作者',
        thumb: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528635890821&di=c78c33efd8fa0fdda9caa219bb3d0e0a&imgtype=0&src=http%3A%2F%2Fscimg.jb51.net%2Ftouxiang%2F201708%2F201708031330372.jpg",
        lastTime: '03:00'
      }, {
        type: "ht",
        count: 26,
        thumb: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528635940072&di=41dd3d984dd019845bb631f4b8071cd2&imgtype=0&src=http%3A%2F%2Ffile1.youboy.com%2Fd%2F177%2F44%2F30%2F1%2F124231s.jpg",
        name: '话题',
        lastTime: '03:00'
      }
    ]
  },
  //事件处理函数
  onLoad: function() {
    // /加载列表
  },
  toggleToShow: function(e) {
    const idx = e.target.dataset.id;
    this.data.list[idx].isCollapse = !this.data.list[idx].isCollapse;
    this.setData({
      list: this.data.list
    })
  },
  playVideo(e) {
    //暂停上次播放
    if (this.data.playIndex) {
      this.videoContextPrev = wx.createVideoContext(`video-${this.data.playIndex}`)
      this.videoContextPrev.seek(0)
      this.videoContextPrev.pause()
    }
    const index = e.currentTarget.dataset.id;
    const item = e.currentTarget.dataset.item;
    this.data.list.forEach(n => {
      n.isPlaying = false;
    })
    console.log(index)
    this.data.list[index - 1].isPlaying = true;
    let videoContext = wx.createVideoContext(`video-${index}`)
    videoContext.play()

    this.setData({
      list: this.data.list,
      playIndex: index
    })

  },
  tabbarTap: function(e) {
    var that = this;
    that.setData({
      currentIndex: e.currentTarget.dataset.idx,
      list: video,
    })
  },
  navigateToType:function(e){
    const typeName = e.currentTarget.dataset.thumbname;
    wx.navigateTo({
      url: `/pages/details/details?typeName=${typeName}`
    })
  },
  onReachBottom: function() {
    if (this.data.isLoading) {
      console.log("ss")
      this.setData({
        isLoading: !this.data.isLoading
      })

      //load
    }

    //加载更多
  }
})