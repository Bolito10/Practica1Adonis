'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DirectorioSchema extends Schema {
  up () {
    this.table('directorios', (table) => {
      table.increments()
      table.string('NombreCompleto').notNulleable();
      table.string('Direccion');
      table.string('Telefono').unique().notNulleable();
      table.timestamps()
    })
  }

  down () {
    this.table('directorios', (table) => {
      // reverse alternations
    })
  }
}

module.exports = DirectorioSchema
