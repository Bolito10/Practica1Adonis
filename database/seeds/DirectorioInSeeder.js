'use strict'

/*
|--------------------------------------------------------------------------
| DirectorioInSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')
class DirectorioInSeeder {
  static async run () {
    await Database.table('directorios').insert([
      {
        Nombre_Completo : 'José Luis Ibarra',
        Direccion : 'Av. 5 de Mayo',
        Telefono : 7623313,
      },
      {
        Nombre_Completo : 'Alejandra Rentería',
        Direccion : 'Av. Independencia',
        Telefono : 7620502,
      },
    ]);
  }
}

module.exports = DirectorioInSeeder
