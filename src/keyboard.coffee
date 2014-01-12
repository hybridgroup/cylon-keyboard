###
 * cylon keyboard
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
###

'use strict'

require './cylon-keyboard'

keypress = require 'keypress'
namespace = require 'node-namespace'
EventEmitter = require('events').EventEmitter

namespace "Cylon", ->
  class @Keyboard extends EventEmitter
    constructor: ->
      @self = this
      keypress(process.stdin)

      # without this, we only get streams when enter is pressed
      process.stdin.setRawMode true

      # resume stdin in the parent process
      process.stdin.resume()

      process.stdin.on 'keypress', (ch, key) =>
        process.stdin.pause() if key and key.ctrl and key.name is 'c'
        @emit key.name, key if key
