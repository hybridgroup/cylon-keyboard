###
 * cylon-keyboard
 * http://cylonjs.com
 *
 * Copyright (c) 2013 Your Name Here
 * Your License Here
###

'use strict'

namespace = require 'node-namespace'

require 'cylon'

module.exports =
  adaptor: (args...) ->
    new Cylon.Adaptors.Keyboard(args...)

  driver: (args...) ->
    new Cylon.Drivers.Keyboard(args...)

  register: (robot) ->
    robot.registerAdaptor 'cylon-keyboard', 'keyboard'
    robot.registerDriver 'cylon-keyboard', 'keyboard'
