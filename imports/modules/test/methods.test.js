import td from 'testdouble'
import { assert } from 'chai'
import { Meteor, Mongo, newCollection, moment, createCursor } from '../../.test-suite/mocks.js'

let Method
describe('Test.methods', function () {
  // const Test = newCollection()

  beforeEach(function () {
    td.replace('meteor/meteor', { Meteor })
    td.replace('meteor/mongo', { Mongo })
  })

  describe('test/create', function () {
    let Methods

    beforeEach(function () {
      Methods = require('./methods.js').methods
      _.extendOwn(Methods, { userId: null })
      Method = function (params) {
        Methods['orders/new'](params)
      }
    })

    it('success', function () {
      const result = Method({ param: 'test' })
      assert.equal(result, 'test')
    })

    it('throws', function () {
      assert.throws(() => {
        Method({ param: 'throws' })
      }, /test/)
    })
  })
})
