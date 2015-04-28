var mustache = require('mustache')
mustache.tags = '% %'

function render (template, view) {
  var keys = Object.keys(view)
  var _view = {}

  for (var i = 0, key; i < keys.length; i++) {
    key = keys[i]
    _view['asset_' + key] = view[key]
  }

  return mustache.render(template, _view)
}

exports.render = render
