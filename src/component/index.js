import Input from './Input'
const components = [
  Input
]
export default (Vue) => {
  components.map(item => {
    Vue.component(`self-${item.name.toLowerCase()}`, item)
  })
}
