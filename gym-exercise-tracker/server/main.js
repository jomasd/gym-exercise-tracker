import { Meteor } from 'meteor/meteor';
import { Exercises } from '../imports/api/exercises/ExercisesCollection';
import { Sets } from '../imports/api/sets/SetsCollection';

// Import Sets 
import '../imports/api/sets/methods';
import '../imports/api/sets/publications';

//Exercises 
import '../imports/api/exercises/methods';
import '../imports/api/exercises/publications';


const insertExercise = (exercise) => {
  Exercises.insert(exercise);
};

const insertSet = (set) => {
  Sets.insert(set);
};


Meteor.startup(() => {
  // If the Exercises collection is empty, add some dummy data.
  if (Exercises.find().count() === 0) {
    insertExercise({
      name: 'Bench Press',
      description: 'Chest exercise',
      userId: 'user1',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    insertExercise({
      name: 'Squat',
      description: 'Leg exercise',
      userId: 'user1',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  // If the Sets collection is empty, add some dummy data.
  if (Sets.find().count() === 0) {
    const benchPress = Exercises.findOne({ name: 'Bench Press' });
    const squat = Exercises.findOne({ name: 'Squat' });

    insertSet({
      exerciseId: benchPress._id,
      weight: 135,
      setsCompleted: 10,
      reps: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    insertSet({
      exerciseId: benchPress._id,
      weight: 185,
      setsCompleted: 10,
      reps: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    insertSet({
      exerciseId: squat._id,
      weight: 225,
      setsCompleted: 10,
      reps: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    insertSet({
      exerciseId: squat._id,
      weight: 275,
      setsCompleted: 10,
      reps: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

});