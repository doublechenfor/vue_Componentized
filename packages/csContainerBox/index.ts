import container from './src/index.vue'
export default {
    install(Vue) {
        Vue.component(container.name, container)
    }
}