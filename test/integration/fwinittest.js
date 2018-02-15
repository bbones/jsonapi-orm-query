/* global describe it, before, after */
const ormdiscoverer = require('../../src/ormdiscoverer')
var expect = require('chai').expect

describe('FW Init', function () {
  it('Check instance exists', function () {
    expect(ormdiscoverer).to.be.an('object')
    expect(ormdiscoverer).to.be.an('ormdiscoverer')
  })
})
