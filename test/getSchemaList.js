/* global describe it, before */
var expect = require('chai').expect
const { Client } = require('pg')

describe('SchemaList check', () => {
  let client
  before(async () => {
    console.log(process.env)
    client = new Client(process.env.DATABASE_URL)
    await client.connect()
  })
  it('Schema list', async (done) => {
    let res
    try {
      res = await client.query('SELECT $1::text as message', ['Hello world!'])
      console.log(res)
      await expect(res.rows[0].message).to.equal('Hello world!')
      await client.end()
      done()

    } catch (e) {
      done(e)
    }
  })
})
