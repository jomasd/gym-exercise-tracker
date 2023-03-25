import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Sets } from './SetsCollection';
import { Exercises } from '../exercises/ExercisesCollection';

Meteor.methods({
  'sets.insert'(exerciseId, setsCompleted, reps, weight) {
    check(exerciseId, String);
    check(setsCompleted, Number);
    check(reps, Number);
    check(weight, Number);

    const exercise = Exercises.findOne(exerciseId);
    if (!exercise) {
      throw new Meteor.Error('invalid-exercise', 'Invalid exercise ID');
    }

    Sets.insert({
      exerciseId,
      setsCompleted,
      reps,
      weight,
      createdAt: new Date(),
    });
  },

  'sets.remove'(setId) {
    check(setId, String);

    Sets.remove(setId);
  },
});

