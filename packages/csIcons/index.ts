import Vue from 'vue'
import svgIcon from './src/index.vue'

svgIcon.install = function (Vue) {
    Vue.component(svgIcon.name, svgIcon)
};

const req = (require as any).context('./icons', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)

export default svgIcon