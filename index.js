var loadScript = require('load-script')

module.exports = function (src, opts) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }
  var promiseFunction = function (url) {
    return function (resolve, reject) {
      loadScript(url, opts, function (error, script) {
        error ? reject(error) : resolve(script)
      })
    }
  }
  if (src instanceof Array) {
    var promises = src.map(function (url) {
      return new Promise(promiseFunction(url))
    })
    return Promise.all(promises)
  }
  return new Promise(promiseFunction(src))
}
