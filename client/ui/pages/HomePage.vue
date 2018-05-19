<template>
  <div>
    <h1>Home Page</h1>
    <button @click="testMethod('test')">Test method</button>
  </div>
</template>

<script>
  import { Meteor } from 'meteor/meteor'
  import '/imports/modules/test/methods'
  
  export default {
    methods: {
      testMethod (param) {
        Meteor.call('test/create', param, function (error, result) {
          console.log(error, result)
        })
      }
    }
  }
</script>
