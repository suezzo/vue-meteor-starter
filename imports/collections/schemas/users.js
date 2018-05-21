import SimpleSchema from 'simpl-schema'

/**
 * @typedef {SimpleSchema} SimpleSchema
 * @summary SimpleSchema for Collections - Reaction uses {@link https://github.com/aldeed/meteor-simple-schema SimpleSchema} to apply basic content and structure validation to Collections. See {@link https://docs.reactioncommerce.com/reaction-docs/master/simple-schema full documentation}.
 */

/**
 * @file Reaction Core schemas
 * Application uses {@link https://github.com/aldeed/meteor-simple-schema SimpleSchema} to apply basic content and structure validation to Collections.
 * @namespace schemas
 */

/**
 * @name Test
 * @memberof schemas
 * @type {SimpleSchema}
 * @property {String} exemptionNo optional
 */

export const Test = new SimpleSchema({
  exemptionNo: {
    type: String,
    optional: true
  },
  customerUsageType: {
    type: String,
    optional: true
  }
})
