var mustache = require('mustache')
mustache.tags = '% %'

function render (template, view) {
  var KEYWORD_REGEX = /%(asset_name_linked|asset_short_name_linked)\b/g

  var _template = template.replace(KEYWORD_REGEX, '%&$1')
  var _view = {
    asset_name_linked: function nameLinked () {
      if (view.name && view.href) {
        return '<a href="' + view.href + '">' + view.name + '</a>'
      }
    },
    asset_short_name_linked: function shortNameLinked () {
      if (view.short_name && view.href) {
        return '<a href="' + view.href + '">' + view.short_name + '</a>'
      }
    }
  }

  var keys = Object.keys(view)

  for (var i = 0, key; i < keys.length; i++) {
    key = keys[i]
    _view['asset_' + key] = view[key]
  }

  return mustache.render(_template, _view)
}

exports.render = render
