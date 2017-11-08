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


EX = function getAbsoluteDirnameOfFileOrModule(pom, prefix) {
  if ((pom && typeof pom) === 'object') {
    pom = (((typeof pom.filename === 'string')
      && pom.filename) || pom);
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
