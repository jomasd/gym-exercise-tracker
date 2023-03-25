import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Exercises } from './ExercisesCollection';

Meteor.methods({
  'exercises.insert'(name, description, userId) {
    check(name, String);
    check(description, String);
    check(userId, String);

    return Exercises.insert({ name, description, userId });
  },

  'exercises.remove'(exerciseId) {
    check(exerciseId, String);

    return Exercises.remove(exerciseId);
  },

  'exercises.update'(exerciseId, name, description) {
    check(exerciseId, String);
    check(name, String);
    check(description, String);

    return Exercises.update(exerciseId, { $set: { name, description } });
  },
});

