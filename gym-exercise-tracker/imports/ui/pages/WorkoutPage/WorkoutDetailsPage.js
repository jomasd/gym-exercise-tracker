import React from 'react';
import { useParams } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import { Workouts } from '../../../api/workouts/WorkoutsCollection';
import { Exercises } from '../../../api/exercises/ExercisesCollection';
import ExerciseList from '../../components/ExerciseList';

export const WorkoutDetailsPage = () => {
  const { workoutId } = useParams();
  const { workout, exercises, isLoading } = useTracker(() => {
    const workoutsHandle = Meteor.subscribe('workouts');
    const exercisesHandle = Meteor.subscribe('exercises');
    const isLoading = !workoutsHandle.ready() || !exercisesHandle.ready();
    const workout = Workouts.findOne(workoutId);
    const exercises = workout && workout.exercises.length > 0 ? workout.exercises.map(exerciseId => Exercises.findOne(exerciseId)).filter(Boolean) : [];
    return { workout, exercises, isLoading };
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="workout-details-page">
      <h1>Workout Details</h1>
      <h2>{workout.name}</h2>
      {exercises.length > 0 ? (
        <ExerciseList exercises={exercises} />
      ) : (
        <p>No exercises found for this workout.</p>
      )}
    </div>
  );
};
