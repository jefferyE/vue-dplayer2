# vue-dplayer2

A player based [dplayer](https://github.com/DIYgod/DPlayer) and vuejs!

适用于 Vue 的 [dplayer](https://github.com/DIYgod/DPlayer) 播放器组件。
# Example

[Demo Page]()

[More Example Code](https://github.com/jefferyE/vue-dplayer2/tree/master/examples)

# Install

### CDN（源码不会打包到项目中）

``` html
<!-- 支持flv（.flv）播放，需要在Dplayer.min.js之前引入flv.min.js文件 -->
<script type="text/javascript" src="path/to/flv.min.js"></script>
<!-- 支持hls（.m3u8）播放，需要在Dplayer.min.hls.min.js文件 -->
<script type="text/javascript" src="path/to/hls.min.js"></script>

<script type="text/javascript" src="path/to/DPlayer.min.js"></script>
<script type="text/javascript" src="path/to/dist/vue-video-player.js"></script>
```
#### mount with global

```main.js
import dplayer from 'vue-dplayer2/player';
Vue.component('vue-dplayer', dplayer);
```

```vue
<template>
  <vue-dplayer />
</template>
```

#### mount with component

```vue
<template>
  <vue-dplayer />
</template>
<script>
import dplayer from 'vue-dplayer2/player';
export default {
  components: { 'vue-dplayer': dplayer }
}
</script>
```

### NPM（源码会打包到项目中）

```main.js
import dplayer from 'vue-dplayer2';
Vue.use(dplayer); // or Vue.use(window.VueDPlayer);
```

```vue
<template>
  <vue-dplayer />
</template>
<script>
import 'flv.js'; // 支持flv（.flv）播放
import 'hls.js'; // 支持hls（.m3u8）播放
export default {
}
</script>
```

# API
- component api:
  * `id` : `[ String, default: 'vueDplayer' ]` : the container for dplayer
  * `options` : `[ Object, default: {} ]` : the options for [dplayer.options](http://dplayer.js.org/zh/guide.html#%E5%8F%82%E6%95%B0)，must prop!
   * `@play` : `[ Function, default: () => {} ]` : the play event for [dplayer.events](http://dplayer.js.org/zh/guide.html#%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A)
   * `@pause` : `[ Function, default: () => {} ]` : the pause event for [dplayer.events](http://dplayer.js.org/zh/guide.html#%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A)
   * ...（其他的事件）
   * 通过$refs获取实例上属性及方法请参考：[examples](https://github.com/jefferyE/vue-dplayer2/tree/master/examples)

- dplayer api
  * [dplayer options](http://dplayer.js.org/zh/guide.html#%E5%8F%82%E6%95%B0)
  * [dplayer api](http://dplayer.js.org/zh/guide.html#api)
  * [dplayer events](http://dplayer.js.org/zh/guide.html#%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A)
  * [dplayer docs](http://dplayer.js.org/)

# Author
[jefferyE](https://github.com/jefferyE)
