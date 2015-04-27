var mustache = require('mustache')
mustache.tags = '% %'

function render (template, data) {
  var keys = Object.keys(data)
  var length = keys.length
  var _data = {}

  for (var i = 0, key; i < length; i++) {
    key = keys[i]
    _data['asset_' + key] = data[key]
  }

  return mustache.render(template, _data)
}

exports.render = render
