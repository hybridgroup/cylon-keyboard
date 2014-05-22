/*
 * cylon keyboard
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

'use strict';

var keypress = require('keypress'),
    EventEmitter = require('events').EventEmitter;

var Keyboard = module.exports = function Keyboard() {
  var self = this;

  keypress(process.stdin);

  // without this, we only get streams when enter is pressed
  process.stdin.setRawMode(true);

  // resume stdin in the parent process
  process.stdin.resume();

  process.stdin.on('keypress', function(ch, key) {
    if (key && key.ctrl && key.name === 'c') {
      process.stdin.pause();
      process.kill(process.pid, 'SIGINT');
    }
    if (key) { self.emit(key.name, key); }
  });
};

subclass(Keyboard, EventEmitter);
