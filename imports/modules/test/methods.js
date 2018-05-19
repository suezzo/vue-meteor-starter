import { Meteor } from 'meteor/meteor'
import SimpleSchema from 'simpl-schema'

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
