import layoutBox from 'cs-com-cslayoutbox'
import headerBox from 'cs-com-csheaderbox'
import headernav from 'cs-com-csheaderbox-nav'
import headersearch from 'cs-com-csheaderbox-search'

const components = [
    layoutBox,
    headerBox,
    headernav,
    headersearch
]
declare module "vue/types/vue" {
    interface VueConstructor {
        install: any
    }
}
export default {
    install(Vue: any) {
        components.map(com => {
            Vue.component(com.name, com)
        })
    }
}