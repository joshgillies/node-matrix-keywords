var keyword = require('./')
var test = require('tape')

test('basic render test', function (assert) {
  assert.equal(keyword.render('Hello, %name%', { name: 'John' }), 'Hello, John')
  assert.end()
})
