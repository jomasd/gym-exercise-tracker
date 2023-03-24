import { Meteor } from 'meteor/meteor';
import { Exercises } from '../imports/api/exercises/ExercisesCollection';
import { Sets } from '../imports/api/sets/SetsCollection';

function insertDummyData() {
    const exercises = [
      {
        name: 'Bench Press',
        description: 'Chest exercise using a barbell or dumbbells.',
      },
      {
        name: 'Squat',
        description: 'Lower body exercise targeting the quadriceps, hamstrings, and glutes.',
      },
    ];
  
    exercises.forEach((exercise) => {
      const exerciseId = Exercises.insert(exercise);
  
      const sets = [
        {
          exercise: exerciseId,
          setsCompleted: 3,
          repsCompleted: 10,
          weight: 100,
        },
        {
          exercise: exerciseId,
          setsCompleted: 4,
          repsCompleted: 8,
          weight: 120,
        },
      ];
  
      sets.forEach((set) => {
        Sets.insert(set);
      });
    });
  }
  