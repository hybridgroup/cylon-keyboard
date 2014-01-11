/*
 * cylon keyboard
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/


(function() {
  'use strict';
  var EventEmitter, keypress, namespace,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  require('./cylon-keyboard');

  keypress = require('keypress');

  namespace = require('node-namespace');

  EventEmitter = require('events').EventEmitter;

  namespace("Cylon", function() {
    return this.Keyboard = (function(_super) {
      __extends(Keyboard, _super);

      function Keyboard() {
        var _this = this;
        this.self = this;
        keypress(process.stdin);
        process.stdin.setRawMode(true);
        process.stdin.resume();
        process.stdin.on('keypress', function(ch, key) {
          if (key && key.ctrl && key.name === 'c') {
            process.stdin.pause();
          }
          if (key) {
            return _this.emit(key.name, key);
          }
        });
      }

      return Keyboard;

    })(EventEmitter);
  });

}).call(this);
