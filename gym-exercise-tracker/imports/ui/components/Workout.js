import React from 'react';
import PropTypes from 'prop-types';

export const Workout = ({ workout }) => (
  <div className="workout">
    <h2>{workout.name}</h2>
    <p>Created at: {workout.createdAt.toString()}</p>
    <p>Updated at: {workout.updatedAt ? workout.updatedAt.toString() : 'Never'}</p>
    <ul>
      {workout.exercises.map((exercise) => (
        <li key={exercise}>{exercise}</li>
      ))}
    </ul>
  </div>
);

Workout.propTypes = {
  workout: PropTypes.shape({
    name: PropTypes.string.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
    updatedAt: PropTypes.instanceOf(Date),
    exercises: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
