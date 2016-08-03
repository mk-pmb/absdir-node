/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

(function usageDemo(pathLib, exactlyEqual) {
  var moduleDir = require('absdir')(module);

  exactlyEqual(moduleDir,
               module.filename.replace(/(\W)howto\.js$/, ''));

  exactlyEqual(pathLib.join(moduleDir, 'howto.js'),
               module.filename);

}(require('path'), require('assert').strictEqual));
