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
  users: newCollection()
})

const EmailController = td.object(['actionInfo'])

const Mongo = td.object(['Collection', 'Cursor', 'ObjectID'])
const moment = td.function()

const Email = td.object(['send'])

const Accounts = td.object(['sendVerificationEmail'])
const HTTP = td.object(['call', 'post', 'get'])
const Roles = td.object(['addUsersToRoles'])
const Job = td.constructor(['after', 'save'])

module.exports = {
  Meteor,
  Mongo,
  moment,
  Accounts,
  HTTP,
  Email,
  EmailController,
  Job,
  Roles,
  createCursor,
  newCollection
}
