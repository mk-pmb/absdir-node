/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var pathLib = require('path');

function getAbsoluteDirnameOfFileOrModule(pathOrModule) {
  if (pathOrModule instanceof Object) {
    pathOrModule = ((((typeof pathOrModule.filename) === 'string')
      && pathOrModule.filename) || pathOrModule);
  }
  if (!pathOrModule) { throw new Error('no path or module given!'); }
  return pathLib.dirname(pathLib.resolve(pathOrModule));
}

module.exports = getAbsoluteDirnameOfFileOrModule;
