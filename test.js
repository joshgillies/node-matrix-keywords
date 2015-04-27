var keyword = require('./')
var test = require('tape')

test('basic render test', function (assert) {
  assert.equal(keyword.render('%asset_assetid%', { assetid: 42 }), '42')
  assert.equal(keyword.render('Hello, %asset_name%', { name: 'John' }), 'Hello, John')
  assert.equal(keyword.render('Hello, %asset_short_name%', { short_name: 'John' }), 'Hello, John')
  assert.end()
})
