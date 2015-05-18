var keyword = require('./')
var test = require('tape')

test('basic render test', function (assert) {
  assert.equal(keyword.render('%asset_assetid%', { assetid: 42 }), '42')
  assert.equal(keyword.render('Hello, %asset_name%', { name: 'John' }), 'Hello, John')
  assert.equal(keyword.render('%asset_name_linked%', { href: '/', name: 'Home' }), '<a href="/">Home</a>')
  assert.equal(keyword.render('Hello, %asset_short_name%', { short_name: 'John' }), 'Hello, John')
  assert.equal(keyword.render('%asset_short_name_linked%', { href: '/', short_name: 'Home' }), '<a href="/">Home</a>')
  assert.end()
})

test('render globals', function (assert) {
  assert.equal(keyword.render('Hello, %asset_name%. Welcome to %globals_site_name%', { global: { site: { name: 'Boom Town!' } }, name: 'John' }), 'Hello, John. Welcome to Boom Town!')
  assert.end()
})
