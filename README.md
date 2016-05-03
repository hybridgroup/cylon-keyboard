# Cylon.js For Keyboard Input

Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics, physical computing, and the Internet of Things (IoT).

This repository contains the adaptor/driver for keyboard input. It uses the hybridgroup fork of the keypress module [https://github.com/TooTallNate/keypress](https://github.com/TooTallNate/keypress) created by [@TooTallNate](https://github.com/TooTallNate) thank you!

Want to use Ruby on robots? Check out our sister project Artoo (http://artoo.io)

Want to use the Go programming language to power your robots? Check out our
sister project Gobot (http://gobot.io).

[![Build Status](https://secure.travis-ci.org/hybridgroup/cylon-keyboard.png?branch=master)](http://travis-ci.org/hybridgroup/cylon-keyboard) [![Code Climate](https://codeclimate.com/github/hybridgroup/cylon-keyboard/badges/gpa.svg)](https://codeclimate.com/github/hybridgroup/cylon-keyboard) [![Test Coverage](https://codeclimate.com/github/hybridgroup/cylon-keyboard/badges/coverage.svg)](https://codeclimate.com/github/hybridgroup/cylon-keyboard)

## How to Install

Installing cylon.js with a keyboard support is pretty easy.

    $ npm install cylon cylon-keyboard

## How to Use

```javascript
var Cylon = require('cylon');

Cylon.robot({
  connections: {
    keyboard: { adaptor: 'keyboard' }
  },

  devices: {
    keyboard: { driver: 'keyboard' }
  },

  work: function(my) {
    my.keyboard.on('a', function(key) {
      console.log("A PRESSED!");
    });
  }
}).start();
```

## How to Connect

All that you need to do is plug the keyboard into your computer as usual.

## Documentation

We're busy adding documentation to our web site at http://cylonjs.com/ please
check there as we continue to work on Cylon.js

Thank you!

## Contributing

For our contribution guidelines, please go to [https://github.com/hybridgroup/cylon/blob/master/CONTRIBUTING.md
](https://github.com/hybridgroup/cylon/blob/master/CONTRIBUTING.md
).

## Release History

For the release history, please go to [https://github.com/hybridgroup/cylon-keyboard/blob/master/RELEASES.md
](https://github.com/hybridgroup/cylon-keyboard/blob/master/RELEASES.md
).

## License

Copyright (c) 2013-2016 The Hybrid Group. Licensed under the Apache 2.0 license.
