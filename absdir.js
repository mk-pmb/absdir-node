/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var EX, pathLib = require('path');

function relFac(base) {
  return function rel() {
    return pathLib.resolve(pathLib.join.apply(null,
      base.concat.apply(base, arguments)));
  };
}

function ifStr(x) { return ((typeof x === 'string') && x); }

EX = function getAbsoluteDirnameOfFileOrModule(pom, prefix) {
  if ((pom && typeof pom) === 'object') {
    pom = String(ifStr(pom.filename) || ifStr(pom.url) || pom
      ).replace(/^file:\/+/, '/');
  }
  if (!pom) { throw new Error('no path or module given!'); }
  pom = pathLib.dirname(pathLib.resolve(pom));

  if (!prefix) { return pom; }

  pom = [ pom ];
  if (prefix === '.') { prefix = ''; }
  if (prefix) { pom = pom.concat(prefix); }
  return relFac(pom);
};


module.exports = EX;
