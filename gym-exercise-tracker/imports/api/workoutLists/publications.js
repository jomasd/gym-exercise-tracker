import { Meteor } from 'meteor/meteor';
import { WorkoutLists } from './WorkoutListsCollection';

Meteor.publish('workoutLists', function workoutListsPublication() {
  return WorkoutLists.find();
});
