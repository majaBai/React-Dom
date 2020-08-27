// 创建虚拟 dom

const { isObject } = require('../utils')
const log = console.log.bind(console)


function createTextElement (text) {
  let type = 'TEXT'
  let props = {
    nodeValue: text
  }
  let c = createElement(type, props)
  return c
}
function createElement (type, props, ...children) {
  let newProps = Object.assign({}, props)
  log('children in react: ', children)
  if (children.length === 0) {
    newProps.children = []
  } else {
    let l = children.map(c => {
      if (isObject(c)) {
        return c
      } else {
        let t = createTextElement(c)
        return t
      }
    })
    newProps.children = l
  }

  return {
    type,
    props: newProps
  }
}

let react = {
  createElement: createElement
}

module.exports = react
// export default react