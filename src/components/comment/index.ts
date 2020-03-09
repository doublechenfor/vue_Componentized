import Comment from './Comment.vue'

export default {
    install(Vue) {
        const Toast = Vue.extend(Comment)
        let vm = new Toast().$mount(document.createElement("div"))
        vm.vm = vm

        let show = false
        function hide() {
            document.body.removeChild(vm.$el)
        }
        Vue.prototype.$comment = {
            show: ({
                commentBoxStatus,
                stars
            }) => {
                if (show) {
                    console.log("hide")
                    hide()
                }
                show = true
                if (commentBoxStatus !== undefined) {
                    vm.commentBoxStatus = commentBoxStatus
                }
                if (stars !== undefined) {
                    vm.stars = stars
                }
                document.body.appendChild(vm.$el)
            },
            hide() {
                show = false
                hide()
            }

        }
    }
}