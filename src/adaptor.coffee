###
 * cylon-keyboard adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
###

"use strict"

namespace = require 'node-namespace'

require './cylon-keyboard'
require './driver'
require './keyboard'
require './keys'

namespace 'Cylon.Adaptors', ->
  class @Keyboard extends Cylon.Adaptor
    constructor: (opts = {}) ->
      super
      @connector = @keyboard = new Cylon.Keyboard


    connect: (callback) ->
      for key in Cylon.KeyboardKeys
        @defineAdaptorEvent eventName: key

      super
