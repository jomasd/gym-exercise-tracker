import { Sets } from '../../api/sets/SetsCollection';
import { Exercises } from '../../api/exercises/ExercisesCollection';

// Helper function to insert a set into the Sets collection
export const insertSet = (set) => {
  Sets.insert(set);
};

// If the Sets collection is empty, add some dummy data.
const benchPress = Exercises.findOne({ name: 'Bench Press' });
const squat = Exercises.findOne({ name: 'Squat' });
if (Sets.find().count() === 0 && benchPress && squat) {
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
