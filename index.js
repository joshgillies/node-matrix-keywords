var extend = require('xtend')
var mustache = require('mustache')
var defaultWriter = new mustache.Writer()

mustache.tags = '% %'

function unescapeKeywords (template) {
  var KEYWORD_REGEX = /%(asset_name_linked|asset_short_name_linked)\b/g
  return template.replace(KEYWORD_REGEX, '%&$1')
}

exports.clearCache = function clearCache () {
  return defaultWriter.clearCache()
}

exports.parse = function parse (template, tags) {
  return defaultWriter.parse(unescapeKeywords(template), tags)
}

exports.render = function render (template, view, partials) {
  var DEFAULTS = {
    asset_name_linked: function nameLinked () {
      if (this.name && this.href) {
        return '<a href="' + this.href + '">' + this.name + '</a>'
      }
    },
    asset_short_name_linked: function shortNameLinked () {
      if (this.short_name && this.href) {
        return '<a href="' + this.href + '">' + this.short_name + '</a>'
      }
    }
  }

  var keys = Object.keys(view)
  var _view = extend(DEFAULTS, view)

  for (var i = 0, key; i < keys.length; i++) {
    key = keys[i]
    _view['asset_' + key] = view[key]
  }

  return defaultWriter.render(unescapeKeywords(template), _view, partials)
}
