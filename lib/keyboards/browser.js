"use strict";

/* global document */

/* eslint key-spacing: 0 */

var EventEmitter = require("events").EventEmitter;

var Keyboard = module.exports = new EventEmitter(),
    emit = Keyboard.emit.bind(Keyboard);

// from http://dmauro.github.io/Keypress/ (Apache 2.0)
var keys = {
  65  : "a",
  66  : "b",
  67  : "c",
  68  : "d",
  69  : "e",
  70  : "f",
  71  : "g",
  72  : "h",
  73  : "i",
  74  : "j",
  75  : "k",
  76  : "l",
  77  : "m",
  78  : "n",
  79  : "o",
  80  : "p",
  81  : "q",
  82  : "r",
  83  : "s",
  84  : "t",
  85  : "u",
  86  : "v",
  87  : "w",
  88  : "x",
  89  : "y",
  90  : "z",
  48  : "0",
  49  : "1",
  50  : "2",
  51  : "3",
  52  : "4",
  53  : "5",
  54  : "6",
  55  : "7",
  56  : "8",
  57  : "9",
  112 : "f1",
  113 : "f2",
  114 : "f3",
  115 : "f4",
  116 : "f5",
  117 : "f6",
  118 : "f7",
  119 : "f8",
  120 : "f9",
  121 : "f10",
  122 : "f11",
  123 : "f12",
  32  : "space",
  8   : "backspace",
  13  : "return",
  37  : "left",
  39  : "right",
  38  : "up",
  40  : "down",
  45  : "insert",
  46  : "delete",
  33  : "pageup",
  34  : "pagedown",
  36  : "home",
  35  : "end",
};

function handle(event) {
  return function(key) {
    var which = key.which,
        name = keys[which];

    if (name) {
      key.name = name;

      emit(name, key);
      emit(event, key);

      if (event === "keyup") {
        emit("keypress", key);
      }
    }
  };
}

Keyboard.connect = function() {
  ["keyup", "keydown"].forEach(function(event) {
    document.addEventListener(event, handle(event));
  });
};
