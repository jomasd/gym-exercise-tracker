import React from 'react';
import ExerciseCard from './ExerciseCard';

const ExerciseList = ({ exercises }) => (
  <div className="p-grid">
    {exercises.map((exercise) => (
      <ExerciseCard key={exercise._id} exercise={exercise} />
    ))}
  </div>
);

export default ExerciseList;
