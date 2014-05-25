/*
 * cylon-keyboard adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require('cylon');

var Keyboard = require('./keyboard'),
    Keys = require('./keys');

var Adaptor = module.exports = function Adaptor(opts) {
  if (opts == null) {
    opts = {};
  }

  Adaptor.__super__.constructor.apply(this, arguments);

  this.connector = this.keyboard = new Keyboard();
}

subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.connect = function(callback) {
  for (var i = 0; i < Keys.length; i++) {
    var key = Keys[i];
    this.defineAdaptorEvent({ eventName: key });
  }

  return Adaptor.__super__.connect.apply(this, arguments);
};
