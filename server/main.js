import { Meteor } from 'meteor/meteor'

Meteor.startup(() => {
  const Msg = new Meteor.Collection('msg')
})
