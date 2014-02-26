/*
 * cylon-keyboard driver
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

'use strict';

require('./cylon-keyboard');
require('./adaptor');
require('./keys');

var namespace = require('node-namespace');

namespace("Cylon.Drivers", function() {
  this.Keyboard = (function(klass) {
    subclass(Keyboard, klass);

    function Keyboard() {
      Keyboard.__super__.constructor.apply(this, arguments);
    }

    Keyboard.prototype.start = function(callback) {
      Logger.info("Keyboard " + this.device.name + " starting.");

      for (var i = 0; i < Cylon.KeyboardKeys.length; i++) {
        var key = Cylon.KeyboardKeys[i];
        this.defineDriverEvent({ eventName: key });
      }

      return Keyboard.__super__.start.apply(this, arguments);
    };

    return Keyboard;

  })(Cylon.Driver);
});

module.exports = Cylon.Drivers.Keyboard;
