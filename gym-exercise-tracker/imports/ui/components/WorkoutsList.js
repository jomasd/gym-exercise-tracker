import React from 'react';
import { Workout } from './Workout';

export const WorkoutsList = ({ workouts }) => (
  <div className="workouts-list">
    {workouts.map((workout) => (
      <Workout key={workout._id} workout={workout} />
    ))}
  </div>
);
