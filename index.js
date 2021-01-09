import dplayer from 'dplayer';
import Dplayer from './player';

window.DPlayer = dplayer; // provide for player.vue

const VueDPlayer = function (Vue) {
  if (VueDPlayer.installed) return;

  Vue.component('vue-dplayer', Dplayer);

  VueDPlayer.installed = true;
}

window.VueDPlayer = VueDPlayer;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueDPlayer);
}


export default VueDPlayer;