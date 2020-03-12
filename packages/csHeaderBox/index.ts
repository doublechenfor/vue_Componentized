import headerNav from './src/index.vue'
declare module "vue/types/vue" {
    interface VueConstructor {
        install: any
    }
}
headerNav.install = function (Vue: any) {
    Vue.component(headerNav.name, headerNav)
}
export default headerNav