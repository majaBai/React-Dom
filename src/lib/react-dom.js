// render 方法： 根据虚拟dom的属性创建真实的 dom, 并插入页面
const { isAttributes } = require('../utils')
const log = console.log.bind(console)

const reactDom = {
  render: (vdom, container) => {
    let { type, props } = vdom
    log('{ type, props }', type, props)
    // 根据 vdom 的 type 创建真实的dom元素
    let element = null
    if (type === 'TEXT') {
      element = document.createTextNode('')
    } else {
      element = document.createElement(type)
    }

    console.log('element: ', element)
    // 根据 vdom 的 props 设置真实dom的属性和事件
    let l1 = Object.keys(props).filter(e => e.startsWith('on'))

    log('l1', l1)

    Object.keys(props).filter(e => e.startsWith('on'))
      .forEach(k => {
        let eventType = k.toLowerCase().slice(2)
        element.addEventListener(eventType, props[k])
      })

    log('element before setAttribute', element)
    Object.keys(props).filter(e => isAttributes(e))
      .forEach(k => {
        element[k] = props[k]
      })
    // 根据 vdom 的  props.children, 递归创建子元素
    let children = props.children || []
    children.forEach(c => reactDom.render(c, element))

    // 将元素插入到 container
    container.appendChild(element)
  }
}

module.exports = reactDom

// export default reactDom