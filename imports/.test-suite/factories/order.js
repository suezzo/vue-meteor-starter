const Factory = require('rosie').Factory
const faker = require('faker')

module.exports = new Factory().sequence('id').attrs({
  status: faker.random.number({ min: 0, max: 6 }),
  checkedBy: faker.random.uuid
})
