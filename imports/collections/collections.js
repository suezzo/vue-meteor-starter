import { Mongo } from 'meteor/mongo'
import * as Schema from './schemas'

/**
 * Cart Collection
 * @ignore
 */
export const Items = new Mongo.Collection('items')

Items.attachSchema(Schema.Test)
