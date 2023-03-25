// imports/ui/components/SetList.js
import React from 'react';
import { Exercises } from '../../api/exercises/ExercisesCollection';
const SetList = ({ sets }) => (
  <div>
    <h2>Sets</h2>
    <ul>
      {sets.map((set) => {
        const exercise = Exercises.findOne(set.exerciseId);
        return (
          <li key={set._id}>
            {exercise ? exercise.name : ''}: {set.setsCompleted} sets x {set.reps} reps @ {set.weight} lbs
          </li>
        );
      })}
    </ul>
  </div>
);

export default SetList;
