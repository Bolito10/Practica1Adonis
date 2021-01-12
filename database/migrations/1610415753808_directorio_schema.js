'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DirectorioSchema extends Schema {
  up () {
    this.create('directorios', (table) => {
      table.increments()
      table.string('Nombre_Completo').notNullable();
      table.string('Direccion');
      table.string('Telefono').unique().notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('directorios')
  }
}

module.exports = DirectorioSchema
