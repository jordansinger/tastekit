Taste Kit
===========

This is a simple wrapper for [TasteKit](https://http://www.taste-kit.com/)

### Installation

This module is installed via npm:

``` bash
npm install tastekit
```

### Usage

```javascript
var TasteKit = require('tastekit');

new TasteKit('YOURTOKEN').like('USERIDENTIFIER', 'ITEMIDENTIFIER').then(function () {
  // Success...
})
.catch(function (err) {
  // Error handling...
});
```

### All methods

All the current methods of the API are implemented this way :

``` js
var client = new TasteKit('YOURTOKEN');

client.like('USERIDENTIFIER', 'ITEMIDENTIFIER').then(function () { ... });
client.dislike('USERIDENTIFIER', 'ITEMIDENTIFIER').then(function () { ... });
client.getRecommendations('USERIDENTIFIER').then(function () { ... });
client.deleteItem('ITEMIDENTIFIER').then(function () { ... });
client.deleteUser('USERIDENTIFIER').then(function () { ... });
```

## MIT Licensed

See the [LICENSE file](LICENSE) for details.