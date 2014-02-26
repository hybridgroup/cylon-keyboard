/*
 * cylon-keyboard driver
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/


(function() {
  'use strict';
  var namespace,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  require('./cylon-keyboard');

  require('./adaptor');

  require('./keys');

  namespace = require('node-namespace');

  namespace("Cylon.Drivers", function() {
    var _ref;
    return this.Keyboard = (function(_super) {
      __extends(Keyboard, _super);

      function Keyboard() {
        _ref = Keyboard.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Keyboard.prototype.start = function(callback) {
        var key, _i, _len, _ref1;
        Logger.info("Keyboard " + this.device.name + " starting.");
        _ref1 = Cylon.KeyboardKeys;
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          key = _ref1[_i];
          this.defineDriverEvent({
            eventName: key
          });
        }
        return Keyboard.__super__.start.apply(this, arguments);
      };

      return Keyboard;

    })(Cylon.Driver);
  });

  module.exports = Cylon.Drivers.Keyboard;

}).call(this);
