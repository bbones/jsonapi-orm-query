'use strict'
const Discoverer = require('./discoverer')
const Dictionary = require('./dictionary')
const Repository = require('./repository')

class ORMDiscoverer {
  constructor () {
    this.discoverer = new Discoverer()
    this.dictionary = new Dictionary()
    this.repository = new Repository()
  }
}

const ormdiscoverer = new ORMDiscoverer()
module.exports = ormdiscoverer
