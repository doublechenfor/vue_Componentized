import headerSearch from './src/index.vue'

declare module "vue/types/vue" {
    interface VueConstructor {
        install: any
    }
}
headerSearch.install = function (Vue) {
    Vue.component(headerSearch.name, headerSearch)
}
export default headerSearch