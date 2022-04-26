'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientsSchema extends Schema {
  up () {
    this.create('clients', (table) => {
      table.uuid('id').primary()
      table.string('username', 80).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamps()
      table.uuid('account_id').unsigned().references('id').inTable('accounts')
    })
  }

  down () {
    this.drop('clients')
  }
}

module.exports = ClientsSchema
