import { Meteor } from 'meteor/meteor';
import { Workouts } from './WorkoutsCollection';

Meteor.publish('workouts', function workoutsPublication() {
  return Workouts.find();
});
