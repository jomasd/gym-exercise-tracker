import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Exercises } from '../../api/exercises/ExercisesCollection';

const ViewMaxWeight = ({ exercises }) => {
  const maxWeightList = exercises.map(exercise => {
    const sets = exercise.sets;
    if (sets.length === 0) {
      return {
        exerciseName: exercise.name,
        maxWeight: null,
      };
    }

    let maxWeight = sets[0].weight;
    sets.forEach(set => {
      if (set.weight > maxWeight) {
        maxWeight = set.weight;
      }
    });

    return {
      exerciseName: exercise.name,
      maxWeight: maxWeight,
    };
  });

  return (
    <div>
      <h2>View Max Weight</h2>
      <table>
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Max Weight</th>
          </tr>
        </thead>
        <tbody>
          {maxWeightList.map((maxWeight, i) => (
            <tr key={i}>
              <td>{maxWeight.exerciseName}</td>
              <td>{maxWeight.maxWeight || '-'}</td>
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
})(ViewMaxWeight);
