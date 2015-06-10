"use strict";

var keypress = require("hybridgroup-keypress"),
    EventEmitter = require("events").EventEmitter;

var Keyboard = module.exports = new EventEmitter(),
    emit = Keyboard.emit.bind(Keyboard);

var keyDowns = {},
    keyDownsTimeouts = {};

function setKeyupTimeout(duration, key) {
  keyDownsTimeouts[key] = setTimeout(function() {
    keyDowns[key] = false;
    emit("keyup", "key");
  }, duration);
}

function handleKeypress(ch, key) {
  if (!key) { return; }

  var name = key.name;

  // kill process on ctrl-c
  if (key.ctrl && name === "c") {
    process.kill(process.pid, "SIGINT");
    return;
  }

  emit(name, key);
  emit("keypress", key);

  if (keyDownsTimeouts[name]) {
    clearTimeout(keyDownsTimeouts[name]);
  }

  if (keyDowns[name]) {
    setKeyupTimeout(200, name);
  } else {
    keyDowns[name] = key;
    emit("keydown", key);
    setKeyupTimeout(500, name);
  }
}

function connect() {
  var stdin = process.stdin;

  keypress(stdin);
  stdin.on("keypress", handleKeypress);
  stdin.setRawMode(true);
  stdin.resume();
}

Keyboard.connect = connect;
Keyboard.handleKeypress = handleKeypress;
