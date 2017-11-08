
<!--#echo json="package.json" key="name" underline="=" -->
absdir
======
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Find the absolute directory path of a filename or a module object. No more
excuses for __dirname.
<!--/#echo -->

Usage
-----

from [test/howto.js](test/howto.js):

<!--#include file="test/howto.js" start="  //#u" stop="  //#r"
  outdent="  " code="javascript" -->
<!--#verbatim lncnt="4" -->
```javascript
var moduleDir = require('absdir')(module);
equal(pathLib.join(moduleDir, 'howto.js'), module.filename);
```
<!--/include-->



API
---

This module exports one function:

### absdir(pathOrModule[, prefixPath])

Without `prefixPath`, returns the absolute path to the parent
directory of `pathOrModule`.

With `prefixPath`, returns a function that will resolve paths relative
to `pathOrModule`'s parent directory and the `prefixPath`
(use `.` if you don't need a prefix).



<!--#toc stop="scan" -->


&nbsp;

Better than __dirname
---------------------
  * Always gives an absolute path, so paths based on that won't
    crumble when your process changes its working directory.
  * Easily avoid those ugly `__`.
    (for [JSLint#39](https://github.com/douglascrockford/JSLint/issues/39))




&nbsp;

License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
