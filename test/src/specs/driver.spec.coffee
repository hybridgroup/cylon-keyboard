'use strict';

keyboard = source("driver")

describe "Cylon.Drivers.Keyboard", ->
  button = new Cylon.Drivers.Keyboard(name: 'keys', device: {connection: 'connect'})

  it "needs tests"
