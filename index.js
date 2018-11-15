const loadScript = require('load-script')

module.exports = function (src, opts) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }
  return new Promise(function (resolve, reject) {
    loadScript(src, opts, function (error, script) {
      error ? reject(error) : resolve(script)
    })
  })
}
