import headerNav from './lib/index.vue'

export default {
    install = function (Vue) {
        Vue.component(headerNav.name, headerNav)
    }

}
