import { Meteor } from 'meteor/meteor';
import { Sets } from './SetsCollection';

Meteor.publish('sets', function () {
  return Sets.find();
});
