import dplayer from 'dplayer';
import Dplayer from './player';

window.DPlayer = dplayer; // provide for player.vue

const VueDPlayer = function (Vue) {
  if (Vue.installed) return;

  Vue.component('vue-dplayer', Dplayer);

  Vue.installed = true;
}

window.VueDPlayer = VueDPlayer;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueDPlayer);
}


export default VueDPlayer;