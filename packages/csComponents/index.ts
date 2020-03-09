import Layout from '@cs-com/cslayoutbox'
import headerNav from '@cs-com/csheadernav'
import container from '@cs-com/cscontainerbox'
const components = [
    Layout,
    headerNav,
    container
]
export default {
    install(Vue) {
        components.map(el => {
            Vue.component(el.name, el)
        })
    }
}