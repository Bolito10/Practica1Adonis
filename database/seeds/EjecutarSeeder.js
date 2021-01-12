'use strict'

/*
|--------------------------------------------------------------------------
| EjecutarSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const DirectorioInSeeder = use('./DirectorioInSeeder')

class EjecutarSeeder {
  async run () {
    await DirectorioInSeeder.run();
  }
}

module.exports = EjecutarSeeder
