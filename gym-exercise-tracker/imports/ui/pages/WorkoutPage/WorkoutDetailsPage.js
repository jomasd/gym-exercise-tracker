import React from 'react';
import { useParams } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import { Workouts } from '../../../api/workouts/WorkoutsCollection';


export const WorkoutDetailsPage = () => {
  const { workoutId } = useParams();
  const {workout} = useTracker(() => {
    Meteor.subscribe('workouts');
    const workout = Workouts.findOne(workoutId);
    return{workout};
  });

  return (
    <>
    <div className="workout-details-page">
      <h1>Workout Details</h1>
      {workout.name}
      {workout.exercises}
    </div>
    </>
  );
};


