(function() {
  'use strict';
  var keyboard;

  keyboard = source("driver");

  describe("Cylon.Drivers.Keyboard", function() {
    var button;
    button = new Cylon.Drivers.Keyboard({
      name: 'keys',
      device: {
        connection: 'connect'
      }
    });
    return it("needs tests");
  });

}).call(this);
