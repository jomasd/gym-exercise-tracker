import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { WorkoutLists } from './WorkoutListsCollection';

Meteor.methods({
  'workoutLists.insert'(name, userId) {
    check(name, String);
    check(userId, String);

    return WorkoutLists.insert({ name, userId, exercises: [] });
  },

  'workoutLists.remove'(workoutListId) {
    check(workoutListId, String);

    return WorkoutLists.remove(workoutListId);
  },

  'workoutLists.update'(workoutListId, name) {
    check(workoutListId, String);
    check(name, String);

    return WorkoutLists.update(workoutListId, { $set: { name } });
  },

  'workoutLists.addExercise'(workoutListId, exerciseId) {
    check(workoutListId, String);
    check(exerciseId, String);

    return WorkoutLists.update(workoutListId, { $push: { exercises: exerciseId } });
  },

  'workoutLists.removeExercise'(workoutListId, exerciseId) {
    check(workoutListId, String);
    check(exerciseId, String);

    return WorkoutLists.update(workoutListId, { $pull: { exercises: exerciseId } });
  },
});
