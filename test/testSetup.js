/* global describe it */
var expect = require('chai').expect

describe('Check setup', function () {
  it('DATABASE_URL check', () => {
    expect(process.env.DATABASE_URL).to.be.a('String')
  })
  it('Connect', (done) => {
    const { Client } = require('pg')
    const client = new Client(process.env.DATABASE_URL)

    client.connect()

    client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
      console.log(err ? err.stack : res.rows[0].message) // Hello World!
      client.end()
      done()
    })
  })
})
