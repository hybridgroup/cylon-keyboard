"use strict";

var Driver = lib("driver");

describe("Cylon.Drivers.Keyboard", function() {
  var driver = new Driver({
    name: "keys",
    connection: {}
  });

  describe("#start", function() {
    var callback;

    beforeEach(function() {
      callback = spy();

      stub(driver, "defineDriverEvent");
      driver.start(callback);
    });

    afterEach(function() {
      driver.defineDriverEvent.restore();
    });

    it("defines driver events for keys", function() {
      expect(driver.defineDriverEvent).to.be.calledWith({ eventName: "a" });
    });
  });
});
