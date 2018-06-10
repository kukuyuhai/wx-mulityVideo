const dd = function(){
  let array = [];
  for (var i = 0;i < 10; i++){
    var video ={
      id:i+1,
      src:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      thumb:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528543259458&di=c02145d89f6c97affe0b54475b86aca4&imgtype=0&src=http%3A%2F%2Fs1.sinaimg.cn%2Fmw690%2F005OLfo0zy7hzqxJGX6a0%26690',
      time:'03:50',
      title:'中国少年问普京会否进口中国高铁',
      content:'阿拉斯的魔法跑哪里卡省的麻烦发送拉什德麻烦卡萨诺的麦克风反馈是安康里卡省的麻烦发送拉什德麻烦里卡省的麻烦发送拉什德麻烦里卡省的麻烦发送拉什德麻烦里卡省的麻烦发送拉什德麻烦',
      date:'5月3日',
      isPlaying:false,
      isCollapse:false
    }

    array.push(video)
  }

  return array;
}


const video = dd();

module.exports = {
  video: video
} 