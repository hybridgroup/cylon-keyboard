###
 * cylon-keyboard driver
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
###

'use strict'

require './cylon-keyboard'
require './adaptor'
require './keys'

namespace = require 'node-namespace'

namespace "Cylon.Drivers", ->
  class @Keyboard extends Cylon.Driver
    start: (callback) ->
      Logger.info "Keyboard #{@device.name} starting."

      for key in Cylon.KeyboardKeys
        @defineDriverEvent eventName: key
