'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Directorio extends Model {
  static get table(){
    return 'directorios';
  }
}

module.exports = Directorio
