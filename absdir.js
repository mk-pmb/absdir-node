/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var EX, pathLib = require('path');

EX = function getAbsoluteDirnameOfFileOrModule(pom) {
  if ((pom && typeof pom) === 'object') {
    pom = (((typeof pom.filename === 'string')
      && pom.filename) || pom);
  }
  if (!pom) { throw new Error('no path or module given!'); }
  return pathLib.dirname(pathLib.resolve(pom));
};

EX.up = function (pom, ups) {
  pom = EX(pom);
  ups = (ups === +ups ? ups : 1);
  for (0; ups > 1; ups -= 1) { pom = pathLib.dirname(pom); }
  return pom;
};

module.exports = EX;
