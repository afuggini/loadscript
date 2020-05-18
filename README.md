# @afuggini/loadscript

Loads external Javascript files asynchronously using promises.

Promisified version of https://www.npmjs.com/package/load-script

## API

`@afuggini/loadscript` appends a `script` node to the `<head>` element in the dom.

`require('@afuggini/loadscript')` returns a function of the following interface:  `function(url: string | string[][, opts]): Promise<void> {}`

### url

Any url or array of urls to load. May be absolute or relative.

### [, opts]

A map of options. Here are the currently supported options:

* `async` - A boolean value used for `script.async`.  By default this is `true`.
* `attrs` - A map of attributes to set on the `script` node before appending it to the DOM.  By default this is empty.
* `charset` - A string value used for `script.charset`.  By default this is `utf8`.
* `text` - A string of text to append to the `script` node before it is appended to the DOM.  By default this is empty.
* `type` - A string used for `script.type`.  By default this is `text/javascript`.

## Install

```
$ npm i @afuggini/loadscript
```

## Example Usage

```javascript
const loadScript = require('@afuggini/loadscript')

// Load one script
loadScript('example.js').then(...)

// Load multiple scripts. Promise returns when all of them are ready.
loadScript(['//somesite.com/script.js', 'http://anotherweb.com/another/file.js']).then(...)
```

## License

MIT
