import { Meteor } from 'meteor/meteor';
import { Workouts } from '../../api/workouts/WorkoutsCollection';
import { Exercises } from '../../api/exercises/ExercisesCollection';
Meteor.startup(() => {
  if (Workouts.find().count() === 2) {
    const benchPress = Exercises.findOne({ name: 'Bench Press' });
    const squat = Exercises.findOne({ name: 'Squat' });
    const workouts = [
      {
        name: 'Workout 1',
        userId: 'user1',
        createdAt: new Date(),
        updatedAt: new Date(),
        exercises: [
          {
            exerciseId: benchPress._id,
            recommendedSets: 3,
            recommendedReps: 10,
          },
          {
            exerciseId: benchPress._id,
            recommendedSets: 3,
            recommendedReps: 10,
          },
        ],
      },
      {
        name: 'Workout 2',
        userId: 'user2',
        createdAt: new Date(),
        updatedAt: new Date(),
        exercises: [
          {
            exerciseId: benchPress._id,
            recommendedSets: 3,
            recommendedReps: 10,
          },
          {
            exerciseId: benchPress._id,
            recommendedSets: 3,
            recommendedReps: 10,
          },
        ],
      },
    ];

    workouts.forEach((workout) => {
      Workouts.insert(workout);
    });
  }
});
