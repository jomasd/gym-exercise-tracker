import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Sets } from './SetsCollection';
import { Exercises } from '../exercises/ExercisesCollection';

const updateExerciseStats = (exerciseId) => {
  check(exerciseId, String);

  const exercise = Exercises.findOne(exerciseId);
  if (!exercise) {
      throw new Meteor.Error('invalid-exercise', 'Invalid exercise ID');
  }
  const sets = Sets.find({ exerciseId }).fetch();

  let maxWeight = 0;
  let totalReps = 0;
  let oneRepMax = 0;

  for (const set of sets) {
    const weight = set.weight;
    const reps = set.reps * set.setsCompleted;

    if (weight > maxWeight) {
      maxWeight = weight;
    }

    totalReps += reps;
  }

  if (totalReps > 0) {
    oneRepMax = Math.round(maxWeight * (36 / (37 - totalReps)));
  }

  const totalSets = sets.reduce((acc, curr) => acc + curr.setsCompleted, 0);
  const totalWeight = sets.reduce((acc, curr) => acc + curr.setsCompleted * curr.weight, 0);


  Exercises.update({ _id: exerciseId }, {
    $set: {
      maxWeight,
      totalSets,
      totalReps,
      totalWeight,
      oneRepMax,
    },
  });
};

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

    // Update exercise stats.
    updateExerciseStats(exerciseId);
  },

  'sets.remove'(setId) {
    check(setId, String);
    const set = Sets.findOne(setId);
    Sets.remove(setId);
    
    // Update exercise stats.
    updateExerciseStats(set.exerciseId);
  },

  'sets.update'(setId, updates) {
    check(setId, String);
    check(updates, {
      exerciseId: String,
      setsCompleted: Number,
      reps: Number,
      weight: Number,
    });

    const { exerciseId, setsCompleted, reps, weight } = updates;

    const exercise = Exercises.findOne(exerciseId);
    if (!exercise) {
      throw new Meteor.Error('invalid-exercise', 'Invalid exercise ID');
    }

    Sets.update(setId, {
      $set: {
        exerciseId,
        setsCompleted,
        reps,
        weight,
        updatedAt: new Date(),
      },
    });
     
    // Update exercise stats.
     updateExerciseStats(exerciseId);
  },
});
