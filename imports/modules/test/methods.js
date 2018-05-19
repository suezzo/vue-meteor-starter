import { Meteor } from 'meteor/meteor'
import SimpleSchema from 'simpl-schema'

/**
 * @method updateOrderWorkflow
 * @summary Updates a hook to update orders status before updating an order.
 * @memberof Test
 * @param {String} userId - currently logged in user
 * @param {Object} selector - selector for product to update
 * @param {Object} modifier - Object describing what parts of the document to update.
 * @param {Object} validation
 * @return {String} _id of updated document
 */
export const methods = {
  'test/create' ({ param, param2 }) {
    new SimpleSchema({
      param: String
    }).validate(arguments[0])

    if (Meteor.isServer) {
      console.log('server')
    } else {
      console.log('client')
    }

    if (param === 'throws') {
      throw new Meteor.Error('test')
    }

    return param
  }
}

Meteor.methods(methods)
