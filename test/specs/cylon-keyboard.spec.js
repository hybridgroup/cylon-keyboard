'use strict';

var module = source("cylon-keyboard");

describe("Cylon.Keyboard", function() {
  it("should be able to register", function() {
    expect(module.register).to.be.a('function');
  });

  it("should be able to create adaptor", function() {
    expect(module.adaptor()).to.be.a('object');
  });

  it("should be able to create driver", function() {
    expect(module.driver({ device: {} })).to.be.a('object');
  });
});
