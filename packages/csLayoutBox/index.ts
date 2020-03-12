import layoutBox from './src/index.vue'

declare module "vue/types/vue" {
    interface VueConstructor {
        install: any
    }
}
layoutBox.install = function (Vue: any) {
    Vue.component(layoutBox.name, layoutBox)
}
export default layoutBox