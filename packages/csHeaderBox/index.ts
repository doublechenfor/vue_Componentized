import headerBox from './src/index.vue'
declare module "vue/types/vue" {
    interface VueConstructor {
        install: any
    }
}
headerBox.install = function (Vue: any) {
    Vue.component(headerBox.name, headerBox)
}
export default headerBox