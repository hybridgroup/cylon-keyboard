# Cylon.js For Keyboard Input

Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics and
physical computing using Node.js

This repository contains the Cylon adaptor for keyboard input.

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

* All patches must be provided under the Apache 2.0 License
* Please use the -s option in git to "sign off" that the commit is your work and
  you are providing it under the Apache 2.0 License
* Submit a Github Pull Request to the appropriate branch and ideally discuss the
  changes with us in IRC.
* We will look at the patch, test it out, and give you feedback.
* Avoid doing minor whitespace changes, renamings, etc. along with merged
  content. These will be done by the maintainers from time to time but they can
complicate merges and should be done seperately.
* Take care to maintain the existing coding style.
* Add unit tests for any new or changed functionality & Lint and test your code
  using [Grunt](http://gruntjs.com/).
* All pull requests should be "fast forward"
  * If there are commits after yours use “git rebase -i <new_head_branch>”
  * If you have local changes you may need to use “git stash”
  * For git help see [progit](http://git-scm.com/book) which is an awesome (and
    free) book on git

## Release History

Version | Notes
------- | -----
0.14.0  | Compatibility with Cylon 1.0.0
0.13.0  | Provide number key support via `hybridgroup-keypress` fork
0.12.0  | Compatibility with Cylon 0.22.0
0.11.0  | Compatibility with Cylon 0.21.0
0.10.0  | Compatibility with Cylon 0.20.0
0.9.0   | Compatibility with Cylon 0.19.0
0.8.0   | Compatibility with Cylon 0.18.0
0.7.0   | Compatibility with Cylon 0.16.0
0.6.2   | Add peerDependencies to package.json
0.6.0   | Compatibility with Cylon 0.15.0, support for 'keydown', 'keypress', and 'keyup' events
0.5.0   | Compatibility with Cylon 0.14.0, remove node-namespace.
0.4.1   | BugFix ctrl-c not terminating the process.
0.4.0   | Update for Cylon.js 0.12.0
0.3.0   | Update for Cylon.js 0.11.0, refactor into pure JavaScript
0.2.0   | Update to cylon 0.10.0
0.1.0   | Initial release

## License

Copyright (c) 2013-2014 The Hybrid Group. Licensed under the Apache 2.0 license.
