// imports/ui/components/ExerciseList.js
import React from 'react';

const ExerciseList = ({ exercises }) => (
  <div>
    <h2>Exercises</h2>
    <ul>
      {exercises.map((exercise) => (
        <li key={exercise._id}>{exercise.name}</li>
      ))}
    </ul>
  </div>
);

export default ExerciseList;
