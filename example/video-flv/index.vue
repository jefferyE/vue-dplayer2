<template>
  <div class="player">
    <vue-dplayer class="vue-dplayer-skin"
      ref="vueDplayer"
      id="vueDplayer"
      :options="playerOptions"
      @play="onPlayerPlay($event)"
      @pause="onPlayerPause($event)"
      @ended="onPlayerEnded($event)"
      @loadstart="onPlayerLoadstart($event)"
      @loadeddata="onPlayerLoadeddata($event)"
      @waiting="onPlayerWaiting($event)"
      @playing="onPlayerPlaying($event)"
      @timeupdate="onPlayerTimeupdate($event)"
      @canplay="onPlayerCanplay($event)"
      @canplaythrough="onPlayerCanplaythrough($event)">
    </vue-dplayer>
</template>

<script>
import 'flv.js';

export default {
  data() {
    return {
      // dplayer options
      playerOptions: {
        container: document.getElementById('vueDplayer'),
        autoplay: false,
        theme: '#FADFA3',
        loop: true,
        lang: 'zh-cn',
        screenshot: true,
        hotkey: true,
        preload: 'auto',
        logo: 'logo.png',
        volume: 0.7,
        mutex: true,
        video: {
          url: '//player.alicdn.com/video/aliyunmedia.mp4',
          pic: 'dplayer.png',
          thumbnails: 'thumbnails.jpg',
          type: 'auto',
        },
        subtitle: {
          url: 'dplayer.vtt',
          type: 'webvtt',
          fontSize: '25px',
          bottom: '10%',
          color: '#b7daff',
        },
        danmaku: {
          id: '9E2E3368B56CDBB4',
          api: 'https://api.prprpr.me/dplayer/',
          token: 'tokendemo',
          maximum: 1000,
          addition: ['https://api.prprpr.me/dplayer/v3/bilibili?aid=4157142'],
          user: 'DIYgod',
          bottom: '15%',
          unlimited: true,
        },
        contextmenu: [
          {
            text: 'custom1',
            link: 'https://github.com/DIYgod/DPlayer',
          },
          {
            text: 'custom2',
            click: (player) => {
              console.log(player);
            },
          },
        ],
        highlight: [
          {
            time: 20,
            text: '这是第 20 秒',
          },
          {
            time: 120,
            text: '这是 2 分钟',
          },
        ]
      }
    }
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  created () {
    if (this.player) {
      // this.player.play(); // 播放视频
      // this.player.pause(); // 暂停视频
      // this.player.toggle(); // 切换播放和暂停
      // this.player.switchVideo(video, danmaku);// 切换到其他视
      // this.player.volume(percentage: number, nostorage: boolean, nonotice: boolean); // 设置视频音量
      // this.player.requestFullscreen(); // 进入全屏
      // this.player.cancelFullscreen(); // 退出全屏
      // console.log(this.player.video); // 获取原生 video
      // console.log(this.player.danmaku); // 获取弹幕
      // console.log(this.player.fullScreen); // 获取全屏类型：两个类型：web 和 browser，默认类型是 browser
      // ...
    }
    
  },
  methods: {
    // listen event
    onPlayerPlay(event, player) {
      // console.log('player play!', player)
    },
    onPlayerPause(event, player) {
      // console.log('player pause!', player)
    },
    onPlayerEnded(event, player) {
      // console.log('player ended!', player)
    },
    onPlayerLoadstart(event, player) {
      // console.log('player Loadstart!', player)
    },
    onPlayerLoadeddata(player) {
      // console.log('player Loadeddata!', player)
    },
    onPlayerWaiting(event, player) {
      // console.log('player Waiting!', player)
    },
    onPlayerPlaying(event, player) {
      // console.log('player Playing!', player)
    },
    onPlayerTimeupdate(event, player) {
      // console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay(event, player) {
      // console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough(event, player) {
      // console.log('player Canplaythrough!', player)
    }
  }
}
</script>
