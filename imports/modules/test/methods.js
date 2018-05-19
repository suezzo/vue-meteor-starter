import { Meteor } from 'meteor/meteor'

export const methods = {
  'test/create' (param) {
    console.log('test')

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
