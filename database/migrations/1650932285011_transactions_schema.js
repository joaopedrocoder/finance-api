'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TransactionsSchema extends Schema {
  up () {
    this.create('transactions', (table) => {
      table.uuid('id').primary()
      table.integer('transaction_number', 8).notNullable().unique()
      table.string('document_type', 254).notNullable()
      table.integer('balance', 8)
      table.string('transaction_history', 254)
      table.timestamps()
      table.uuid('account_id').unsigned().references('id').inTable('accounts')
    })
  }

  down () {
    this.drop('transactions')
  }
}

module.exports = TransactionsSchema
