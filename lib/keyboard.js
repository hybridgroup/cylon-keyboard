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
  
  
  self.currentKeyDowns = {};
  self.currentKeyDownsTimeouts = {};
  
  self.setKeyupTimeout = function(timeoutDuration, key){
    
    self.currentKeyDownsTimeouts[key.name] = setTimeout(function(){
      self.currentKeyDowns[key.name] = false;
      self.emit('keyup', key);
    }, timeoutDuration);
  };

  process.stdin.on('keypress', function(ch, key) {
    if (key && key.ctrl && key.name === 'c') {
      process.stdin.pause();
      process.kill(process.pid, 'SIGINT');
    }
    
    if (key) {
      self.emit(key.name, key);//keeping to not break existing code
      if (self.currentKeyDownsTimeouts[key.name]) {
        clearTimeout(self.currentKeyDownsTimeouts[key.name]);
      }
    
      if (!self.currentKeyDowns[key.name]) {
        self.currentKeyDowns[key.name] = key;
        self.emit('keydown', key);
        
        //there is a delay in console when holding down a buttton before it presses multiple times.
        //so when the button is first pressed we need to delay a little bit longer before fireing keyup 
        //the downside to this approach is that if the button is quickly pressed and released, then there will be a half a second delay before the keyup fires.
        //or if you press the same button twice in rapid succession you will only get one key up event
        self.setKeyupTimeout(500, key);  
      }
      else {
        self.setKeyupTimeout(200, key);
      }
      
    }
  });
};

subclass(Keyboard, EventEmitter);
