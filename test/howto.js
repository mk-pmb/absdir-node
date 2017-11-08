/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var pathLib = require('path'), equal = require('assert').strictEqual,
  absdir = require('absdir'), modDir,
  pkgMeta = require.resolve('absdir/package.json');

modDir = (function readmeDemo() {
  //#u
  var moduleDir = require('absdir')(module);
  equal(pathLib.join(moduleDir, 'howto.js'), module.filename);
  //#r

  equal(moduleDir, module.filename.replace(/(\W)howto\.js$/, ''));
  return moduleDir;
}());


(function joinRel() {
  var testFile = absdir(module, '.');
    // If you need multiple invocations in a real script,
    // better cache the result of require in a var.
  equal(testFile(),                   modDir);
  equal(testFile('howto.js'),         module.filename);
  equal(testFile('../package.json'),  pkgMeta);
}());

(function joinUp1() {
  var pkgFile = absdir(module, '..');
  equal(pkgFile(),                  modDir.replace(/(\W)test$/, ''));
  equal(pkgFile('test/howto.js'),   module.filename);
  equal(pkgFile('package.json'),    pkgMeta);
}());






console.log("+OK tests passed.");   //= "+OK tests passed."
