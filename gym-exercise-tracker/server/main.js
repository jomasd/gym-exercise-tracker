import { Meteor } from 'meteor/meteor';

import { Exercises } from '../imports/api/exercises/ExercisesCollection';
import { Sets } from '../imports/api/sets/SetsCollection';

async function insertExercise({ name, description }) {
  await Exercises.insertAsync({ name, description });
}

async function insertSet({ exercise, setsCompleted, repsCompleted, weight }) {
  await Sets.insertAsync({ exercise, setsCompleted, repsCompleted, weight, createdAt: new Date() });
}


Meteor.startup(async () => {
  // If the Exercises collection is empty, add some dummy data.
  if (await Exercises.find().countAsync() === 0) {
    await insertExercise({
      name: 'Bench Press',
      description: 'Chest exercise'
    });

    await insertExercise({
      name: 'Squat',
      description: 'Leg exercise'
    });
  }

  // If the Sets collection is empty, add some dummy data.
  if (await Sets.find().countAsync() === 0) {
    const exerciseId = (await Exercises.findOne({ name: 'Bench Press' }))._id;

    await insertSet({
      exercise: exerciseId,
      setsCompleted: 3,
      repsCompleted: 10,
      weight: 135
    });

    await insertSet({
      exercise: exerciseId,
      setsCompleted: 4,
      repsCompleted: 8,
      weight: 185
    });
  }

  // Publish the entire Exercises and Sets collections to all clients.
  Meteor.publish('exercises', function () {
    return Exercises.find();
  });

  Meteor.publish('sets', function () {
    return Sets.find();
  });
});
