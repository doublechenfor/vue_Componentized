import Comment from './Comment.vue'

let timeInterval: any = null
export default {
    install(Vue) {
        Vue.prototype.$cutDowmTime = {
            getIntervalInstance() {
                return timeInterval
            },
            getCountDown(DateInstance) {
                timeInterval = setInterval(function () {
                    var nowTime = new Date();

                    var t = DateInstance.getTime() - nowTime.getTime();//Date.getTime()返回距 1970 年 1 月 1 日之间的毫秒数
                    var d = Math.floor(t / 1000 / 60 / 60 / 24);
                    var hour: any = Math.floor(t / 1000 / 60 / 60 % 24);
                    var min: any = Math.floor(t / 1000 / 60 % 60);
                    var sec: any = Math.floor(t / 1000 % 60);

                    if (hour < 10) {
                        hour = "0" + hour;
                    }
                    if (min < 10) {
                        min = "0" + min;
                    }
                    if (sec < 10) {
                        sec = "0" + sec;
                    }
                    let countDownTime = d + "天-" + hour + ":" + min + ":" + sec;
                    console.log('距离冷豹生日还剩', countDownTime)
                }, 1000);
            },
            clearIntervalTime(intervalInstance) {
                window.clearInterval(intervalInstance)
            },
        }
    },
}