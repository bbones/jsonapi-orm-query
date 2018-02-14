/* global describe it, before, after */
var expect = require('chai').expect
const { Client } = require('pg')

describe('SchemaList check', () => {
  let client
  before(async () => {
    client = new Client(process.env.DATABASE_URL)
    await client.connect()
  })

  it('Connect', async () => {
    let res = await client.query('SELECT $1::text as message', ['Hello world!'])
    expect(res.rows[0].message).to.equal('Hello world!')
  })

  it('Schemas query', async () => {
    let res = await client.query('select schema_name from information_schema.schemata')
    expect(res.rows.find((element) => {
      return element.schema_name === 'keeper'
    }).schema_name).to.equal('keeper')
  })

  it('Table query', async () => {
    let res = await client.query('SELECT table_name FROM information_schema.tables')
    expect(res.rows.find((element) => {
      return element.table_name === 'object'
    }).table_name).to.equal('object')
  })

  after(async () => {
    await client.end()
  })
})
