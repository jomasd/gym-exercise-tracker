// imports/ui/components/SetList.js
import React from 'react';

const SetList = ({ sets }) => (
  <div>
    <h2>Sets</h2>
    <ul>
      {sets.map((set) => (
        <li key={set._id}>
          {set.exercise}: {set.setsCompleted} sets x {set.repsCompleted} reps @ {set.weight} lbs
        </li>
      ))}
    </ul>
  </div>
);

export default SetList;
