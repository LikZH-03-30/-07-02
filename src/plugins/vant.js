import { } from 'vant'

const elements = []

export default function (Vue) {
  elements.forEach((item) => Vue.use(item))
}