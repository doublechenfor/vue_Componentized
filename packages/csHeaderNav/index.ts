import headerNav from './src/index.vue'
export default {
    install(Vue) {
        Vue.component(headerNav.name, headerNav)
    }
}