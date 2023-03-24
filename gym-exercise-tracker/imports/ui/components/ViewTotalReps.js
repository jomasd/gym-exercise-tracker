import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

const TotalReps= ({ exercises }) => {
  const totalRepsList = exercises.map(exercise => {
    const sets = exercise.sets;
    let totalReps = 0;
    sets.forEach(set => {
      totalReps += set.reps;
    });
    return {
      exerciseName: exercise.name,
      totalReps: totalReps,
    };
  });

  return (
    <div>
      <h2>Total Reps</h2>
      <table>
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Total Reps</th>
          </tr>
        </thead>
        <tbody>
          {totalRepsList.map((totalReps, i) => (
            <tr key={i}>
              <td>{totalReps.exerciseName}</td>
              <td>{totalReps.totalReps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default withTracker(() => {
  Meteor.subscribe('exercises');
  return {
    exercises : [
        {
            _id: '1',
            name: 'Bench Press',
            sets: [
            {
                weight: 200,
                reps: 10,
            },
            {
                weight: 220,
                reps: 8,
            },
            {
                weight: 230,
                reps: 6,
            },
            ],
        },
        {
            _id: '2',
            name: 'Squat',
            sets: [
            {
                weight: 300,
                reps: 8,
            },
            {
                weight: 320,
                reps: 6,
            },
            {
                weight: 330,
                reps: 4,
            },
            ],
        },
        {
            _id: '3',
            name: 'Deadlift',
            sets: [
            {
                weight: 350,
                reps: 5,
            },
            {
                weight: 370,
                reps: 3,
            },
            ],
        },
        ]
  };
})(TotalReps);
