import bodypanel from './src/index.vue'
declare module "vue/types/vue" {
    interface VueConstructor {
        install: any
    }
}
bodypanel.install = function (Vue) {
    Vue.component(bodypanel.name, bodypanel)
}
export default bodypanel