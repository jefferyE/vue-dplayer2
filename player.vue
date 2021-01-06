<template>
  <div class="__dplayer_wrapper">
    <div :id="id" v-if="resetd"></div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: 'vueDplayer'
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      player: null,
      resetd: false
    }
  },
  watch: {
    url: {
      handler () {
        this.initPlayer();
      },
      immediate: true
    }
  },
  destroyed() {
    this.removePlayer();
  },
  methods: {
    initPlayer () {
      this.removePlayer();
      this.$nextTick(() => {
        this.resetd = true;
        this.$nextTick(() => {
          this.createPlayer();
        });
      });
    },
    createPlayer () {
      if (!window.DPlayer) return;

      if (!this.id) throw new Error('please provide `id` prop first');

      const options = this.options;
      if (!options.container) options.container = document.getElementById(this.id);
      if (!options.container) throw new Error(`can't found DOM by \`${this.id}\` id`);

      this.player = new window.DPlayer(Object.assign({}, options));

      // event bind
      const events = Object.keys(this.$listeners || {}) || this.getEvents();

      events.forEach(eventName => {
        this.player.on(eventName, (data) => {
          this.$emit(eventName, data, this.player);
        });
      });

      this.$nextTick(() => { // fix：Fixed the problem of video following scrolling when some browser pages scroll
        const videos = document.querySelectorAll('video');
        for (const video of videos) {
          video.setAttribute('x5-video-player-type', true);
        }
      });
    },
    removePlayer () {
      if (this.player) {
        this.player.destroy();
        this.player = null;
        this.resetd = false;
      }
    },
    getEvents () {
      if (!this.player) return [];

      const _defaultEvents = Object.keys(this.player.events).filter(name => name !== 'events').reduce((prev, name) => {
        prev = prev.concat(prev, this.player.events[name]);
        return prev;
      }, []);
      const defaultEvents = [];
      _defaultEvents.forEach(name => {
        if (defaultEvents.indexOf(name) === -1) {
          defaultEvents.push(name);
        }
      });

      return defaultEvents;
    },
    play () {
      if (!this.player) return;

      this.player.play();
    },
    pause () {
      if (!this.player) return;

      this.player.pause();
    },
    toggle () {
      if (!this.player) return;

      this.player.toggle();
    },
    switchVideo (video, danmaku) {
      if (!this.player) return;

      this.player.switchVideo(video, danmaku);
    },
    volume (percentage, nostorage = true, nonotice = true) {
      if (!this.player) return;

      this.player.volume(percentage, nostorage, nonotice);
    },
    video () {
      if (!this.player) return null;

      return this.player.video;
    },
    danmaku () {
      if (!this.player) return null;

      return this.player.danmaku;
    },
    fullScreen () {
      if (!this.player) return null;

      return this.player.fullScreen;
    },
    requestFullscreen (type = 'web') {
      if (!this.player || !this.fullScreen()) return;

      this.player.fullScreen.request(type);
    },
    cancelFullscreen (type = 'web') {
      if (!this.player || !this.fullScreen()) return;

      this.player.fullScreen.cancel(type);
    }
  }
}
</script>

<style>
.__dplayer_wrapper,
.__dplayer_wrapper .dplayer,
.__dplayer_wrapper .dplayer video {
  width: 100%;
  height: 100%;
}
</style>