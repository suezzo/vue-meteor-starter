import { Meteor } from 'meteor/meteor'

export const methods = {
  'test/create' (param) {
    console.log('test')

    if (this.isSimulation) {
    }
    if (Meteor.isServer) {
      console.log('server')
    } else {
      console.log('client')
    }
    console.log(this.isSimulation)
    // return param
  }
}

Meteor.methods(methods)
