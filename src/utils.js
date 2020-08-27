const log = console.log.bind(console)


const isObject = o => Object.prototype.toString.call(o) === '[object Object]'

const isAttributes = key => !key.startsWith('on') && key !== 'children'

module.exports = {
  isObject,
  isAttributes
}

// export default {
//   log,
//   e,
//   isObject,
//   isAttributes
// }