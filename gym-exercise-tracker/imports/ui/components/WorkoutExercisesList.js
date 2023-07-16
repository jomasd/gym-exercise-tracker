import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Exercises } from '../../api/exercises/ExercisesCollection';

export const WorkoutExercisesList = ({ exercises }) => {
  const exercisesData = useTracker(() => {
    return Exercises.find({}).fetch();
  });

  const getExerciseName = (id) => {
    const exercise = exercisesData.find(exercise => exercise._id === id);
    return exercise ? exercise.name : 'Exercise not found';
  };

  return (
    <div>
      <h3>Exercises for this workout:</h3>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>
            <h4>{getExerciseName(exercise.exerciseId)}</h4>
            <p>Recommended Sets: {exercise.recommendedSets}</p>
            <p>Recommended Reps: {exercise.recommendedReps}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
