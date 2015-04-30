# node-matrix-keywords

[![Build Status](https://travis-ci.org/joshgillies/node-matrix-keywords.svg)](https://travis-ci.org/joshgillies/node-matrix-keywords)

Render Squiz Matrix keywords with JavaScript!

## Example

```js
var keywords = require('node-matrix-keywords')

var template = 'Page Title: %asset_name%\nPage Type: %asset_type%'
var view = {
  name: 'Home',
  type: 'Standard Page'
}

console.log(keywords.render(template, view))
```

## API

### var keywords = require('node-matrix-keywords')

### keywords.render(template, view)

The render function takes two arguments:

  * `template`: is a string containing your template
  * `view`: is an object representing the data in your template

## License

MIT
