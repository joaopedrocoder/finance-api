'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AgencySchema extends Schema {
  up () {
    this.create('agencies', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.integer('agency_number', 8).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('agencies')
  }
}

module.exports = AgencySchema
