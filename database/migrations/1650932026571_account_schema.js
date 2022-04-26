'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AccountSchema extends Schema {
  up () {
    this.create('accounts', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.timestamps()
      table.integer('agency_id').unsigned().references('id').inTable('agencies')
      table.uuid('client_id').unsigned().references('id').inTable('clients')
    })
  }

  down () {
    this.drop('accounts')
  }
}

module.exports = AccountSchema
