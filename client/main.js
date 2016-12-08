import { Template } from 'meteor/templating'
import { Meteor } from 'meteor/meteor';
import './main.html'

const Msg = new Meteor.Collection('msg')

Template.msg.helpers({
  messages: () =>
    Msg.find({}, {sort: {created: -1}})
})

Template.body.events({
  'submit': (event) => {
    event.preventDefault()
    const msg = event.target.msg.value
    const user = Meteor.user().emails[0].address
    Msg.insert({user: user, body: msg, created: new Date()})
    event.target.msg.value = ''
  }
})
