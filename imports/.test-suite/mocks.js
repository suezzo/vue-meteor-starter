'use strict'

const td = require('testdouble')

// Collections

// use newCollection() to stub a Meteor collection that you would have created with
// `new Meteor.Collection('somename')`. You must call it with parens () - this allows
// you to have more than one. The default behavior of find() is that for any
// arguments passed, it will return a stubbed cursor object that you can
// test with td.verify(). If you need more specific behavior, you should create a
// custom stub rather than using this one.

const createCursor = () => td.object(['forEach', 'map', 'fetch', 'count', 'observe', 'observeChanges'])

const newCollection = () => {
  const collection = td.object(['find', 'findOne', 'insert', 'remove', 'upsert', 'allow', 'deny', 'update'])
  td.when(collection.find(td.matchers.anything())).thenReturn(createCursor())
  return collection
}

const errorFunction = (error, reason, details) => {
  const func = function (error, reason, details) {
    if (error) this.error = error;
    if (reason) this.reason = reason;
    if (details) this.details = details;
  }

  return func(error, reason, details)
}

// Meteor core
// XXX very incomplete - check API and add more
const Meteor = td.object(['call', 'publish', 'setTimeout', 'methods'])
Object.assign(Meteor, {
  settings: {
    private: {
      bitskins: {
        apiKey: 'bitskins.apiKey',
        secret: 'bitskins.secret'
      },
      rushpay: {
        userId: 'rushpay.userId',
        serviceId: 20
      }
    }
  },
  isClient: false,
  isServer: true,
  users: newCollection(),
  Error: function (error, reason, details) {
    throw new Error(error, reason, details)
  }
})

const EmailController = td.object(['actionInfo'])

const Mongo = td.object(['Collection', 'Cursor', 'ObjectID'])

const unix = td.function()
const isAfter = td.function()
const moment = function () {
  return {
    unix,
    isAfter
  }
}


const Email = td.object(['send'])

const Accounts = td.object(['sendVerificationEmail'])
const HTTP = td.object(['call', 'post', 'get'])
const Roles = td.object(['addUsersToRoles', 'userIsInRole'])
const Job = td.constructor(['after', 'save'])

const Checks = {
  loggedIn: td.function(),
  inRole: td.function()
}

const Log = td.object(['new'])

module.exports = {
  Meteor,
  Mongo,
  moment,
  Accounts,
  HTTP,
  Email,
  EmailController,
  Job,
  Checks,
  Roles,
  createCursor,
  newCollection,
  Log
}
