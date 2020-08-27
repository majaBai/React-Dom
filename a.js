const react = require('./src/lib/react')
const reactDom = require('./src/lib/react-dom')

const e = selector => document.querySelector(selector)

const log = console.log.bind(console)


function vDom () {
  let type = 'button'
  let props = {
    id: 'link-btn',
    type: 'button',
    onClick: function () {
      console.log('clicked')
    }
  }
  let children = 'link'
  let dom = react.createElement(type, props, children)
  return dom
}

// 实现的两个库最主要的是实现 React.createElement和 ReactDom.render
// 仿照 React 自身的 createElement 函数：
// React.createElement(component, props, ...children)
function main () {
  let root = e('#root')
  let dom = vDom()
  log('vdom: ', dom)
  reactDom.render(dom, root)
}

main()