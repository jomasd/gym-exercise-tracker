import { Exercises } from '../../api/exercises/ExercisesCollection';

// Helper function to insert an exercise into the Exercises collection
export const insertExercise = (exercise) => {
  Exercises.insert(exercise);
};

// If the Exercises collection is empty, add some dummy data.
if (Exercises.find().count() === 0) {
  insertExercise({
    name: 'Bench Press',
    description: 'Chest exercise',
    userId: 'user1',
    createdAt: new Date(),
    updatedAt: new Date(),
    oneRepMax: 225,
    maxWeight: 185,
    totalSets: 20,
    totalReps: 200,
    totalWeight: 3700,
  });

  insertExercise({
    name: 'Squat',
    description: 'Leg exercise',
    userId: 'user1',
    createdAt: new Date(),
    updatedAt: new Date(),
    oneRepMax: 315,
    maxWeight: 275,
    totalSets: 20,
    totalReps: 160,
    totalWeight: 4400,
  });
}
