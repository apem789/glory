import MSwiper from './src/Swiper.vue'

MSwiper.install = function(Vue: any) {
  Vue.component(MSwiper.name, MSwiper)
}

export default MSwiper
