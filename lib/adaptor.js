/*
 * cylon-keyboard adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var namespace = require('node-namespace');

require('./cylon-keyboard');
require('./driver');
require('./keyboard');
require('./keys');

namespace('Cylon.Adaptors', function() {
  this.Keyboard = (function(klass) {
    subclass(Keyboard, klass);

    function Keyboard(opts) {
      if (opts == null) { opts = {}; }
      Keyboard.__super__.constructor.apply(this, arguments);
      this.connector = this.keyboard = new Cylon.Keyboard;
    }

    Keyboard.prototype.connect = function(callback) {
      for (var i = 0; i < Cylon.KeyboardKeys.length; i++) {
        var key = Cylon.KeyboardKeys[i];
        this.defineAdaptorEvent({ eventName: key });
      }

      return Keyboard.__super__.connect.apply(this, arguments);
    };

    return Keyboard;

  })(Cylon.Adaptor);
});

module.exports = Cylon.Adaptors.Keyboard;
