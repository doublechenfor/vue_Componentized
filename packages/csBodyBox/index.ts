import bodyBox from './src/index.vue'
declare module "vue/types/vue" {
    interface VueConstructor {
        install: any
    }
}
bodyBox.install = function (Vue) {
    Vue.component(bodyBox.name, bodyBox)
}
export default bodyBox