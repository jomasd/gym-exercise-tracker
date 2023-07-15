import { Workouts } from '../../api/workouts/WorkoutsCollection';
import { Exercises } from '../../api/exercises/ExercisesCollection';

// If the WorkoutLists collection is empty, add some dummy data.
const benchPress = Exercises.findOne({ name: 'Bench Press' });
const squat = Exercises.findOne({ name: 'Squat' });
if (Workouts.find().count() === 0 && benchPress && squat) {
  console.log('Inserting dummy workouts...');

  Workouts.insert({
    name: 'Workout List 1',
    userId: 'user1',
    exercises: [benchPress._id, squat._id],
    createdAt: new Date(),
    updatedAt: new Date(),
  }, (error, result) => {
    if (error) {
      console.error('Error inserting Workout List 1:', error);
    } else {
      console.log('Workout List 1 inserted successfully:', result);
    }
  });

  Workouts.insert({
    name: 'Workout List 2',
    userId: 'user1',
    exercises: [squat._id],
    createdAt: new Date(),
    updatedAt: new Date(),
  }, (error, result) => {
    if (error) {
      console.error('Error inserting Workout List 2:', error);
    } else {
      console.log('Workout List 2 inserted successfully:', result);
    }
  });
} else {
  console.log('Skipping insertion of dummy workouts:', Workouts.find().count(), benchPress, squat);
}
