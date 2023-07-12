// Import Meteor package
import { Meteor } from 'meteor/meteor';

// Import collections
import { Exercises } from '../imports/api/exercises/ExercisesCollection';
import { Sets } from '../imports/api/sets/SetsCollection';
import { WorkoutLists } from '../imports/api/workoutLists/WorkoutListsCollection';

// Import Sets methods and publications
import '../imports/api/sets/methods';
import '../imports/api/sets/publications';

// Import Exercises methods and publications
import '../imports/api/exercises/methods';
import '../imports/api/exercises/publications';

// Import WorkoutLists methods and publications
import '../imports/api/workoutLists/methods';
import '../imports/api/workoutLists/publications';

// Helper function to insert an exercise into the Exercises collection
const insertExercise = (exercise) => {
  Exercises.insert(exercise);
};

// Helper function to insert a set into the Sets collection
const insertSet = (set) => {
  Sets.insert(set);
};

// Meteor startup function
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

  // If the WorkoutLists collection is empty, add some dummy data.
  if (WorkoutLists.find().count() === 0) {
    WorkoutLists.insert({
      name: 'Workout List 1',
      userId: 'user1',
      exercises: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    WorkoutLists.insert({
      name: 'Workout List 2',
      userId: 'user1',
      exercises: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
});
