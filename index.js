var mustache = require('mustache')
mustache.tags = '% %'

function render (template, data) {
  return mustache.render(template, data)
}

exports.render = render
