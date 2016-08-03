
absdir
======
Find the absolute directory path of a filename or a module object.
Can work as a more reliable alternative to `__dirname`.


Usage
-----
from [test/howto.js](test/howto.js):
```javascript
  var moduleDir = require('absdir')(module);

  exactlyEqual(moduleDir,
               module.filename.replace(/(\W)howto\.js$/, ''));

  exactlyEqual(pathLib.join(moduleDir, 'howto.js'),
               module.filename);
```


Better than __dirname
---------------------
  * Always gives an absolute path, so paths based on that won't
    crumble when your process changes its working directory.
  * Easily avoid those ugly `__`.
    (for [JSLint#39](https://github.com/douglascrockford/JSLint/issues/39))




License
-------
ISC
