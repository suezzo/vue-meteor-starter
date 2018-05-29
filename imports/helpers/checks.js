import { Meteor } from 'meteor/meteor'
import { Roles } from 'meteor/alanning:roles'

export const Checks = {
  loggedIn: (userId) => {
    if (!userId) {
      throw new Meteor.Error('user.notLoggedIn')
    }
  },

  inRole: (userId, role) => {
    if (Meteor.isServer) {
      const check = Roles.userIsInRole(userId, role)

      if (!check) {
        throw new Meteor.Error('user.notAuthorized', 'Nie masz wystarczających uprawnień.')
      }
    }
  }
}
