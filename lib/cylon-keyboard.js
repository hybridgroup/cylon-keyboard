/*
 * cylon-keyboard
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

require('cylon');
require('./adaptor');
require('./driver');

module.exports = {
  adaptor: function(opts) {
    return new Cylon.Adaptors.Keyboard(opts);
  },

  driver: function(opts) {
    return new Cylon.Drivers.Keyboard(opts);
  },

  register: function(robot) {
    robot.registerAdaptor('cylon-keyboard', 'keyboard');
    return robot.registerDriver('cylon-keyboard', 'keyboard');
  }
};
