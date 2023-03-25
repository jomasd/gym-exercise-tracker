import { Meteor } from 'meteor/meteor';
import { Exercises } from './ExercisesCollection';

Meteor.publish('exercises', function exercisesPublication() {
  return Exercises.find();
});
