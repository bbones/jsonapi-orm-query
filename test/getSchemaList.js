/* global describe it, before */
var expect = require('chai').expect
const { Client } = require('pg')

describe('SchemaList check', () => {
  let client
  before(async () => {
    client = new Client(process.env.DATABASE_URL)
    client.connect()
  })
  it('Schema list', (done) => {
    let res
    res = client.query('SELECT $1::text as message', ['Hello world!'])
    console.log(res)
    expect(res.rows[0].message).to.equal('Hello world!')
    await client.end()
    done()
  })
})
