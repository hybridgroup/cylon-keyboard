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

var Keyboard = module.exports = new EventEmitter();

Keyboard.connect = function connect() {
  var stdin = process.stdin;

  keypress(stdin);
  stdin.on('keypress', this.handleKeypress);
  stdin.setRawMode(true);
  stdin.resume();
};

Keyboard.handleKeypress = function handleKeypress(ch, key) {
  if (key) {
    if (key.ctrl && key.name === 'c') {
      return process.kill(process.pid, 'SIGINT');
    }

    this.emit(key.name, key);
  };
};
