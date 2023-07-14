import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Workouts } from './WorkoutsCollection';

Meteor.methods({
  'workouts.insert'(name, userId) {
    check(name, String);
    check(userId, String);

    return Workouts.insert({ name, userId, exercises: [] });
  },

  'workouts.remove'(workoutId) {
    check(workoutId, String);

    return Workouts.remove(workoutId);
  },

  'workouts.update'(workoutId, name) {
    check(workoutId, String);
    check(name, String);

    return Workouts.update(workoutId, { $set: { name } });
  },

  'workouts.addExercise'(workoutId, exerciseId) {
    check(workoutId, String);
    check(exerciseId, String);

    return Workouts.update(workoutId, { $push: { exercises: exerciseId } });
  },

  'workouts.removeExercise'(workoutId, exerciseId) {
    check(workoutId, String);
    check(exerciseId, String);

    return Workouts.update(workoutId, { $pull: { exercises: exerciseId } });
  },
});
