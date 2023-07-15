import React from 'react';
import { useParams } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import { Workouts } from '../../api/workouts/WorkoutsCollection';
import { Exercises } from '../../api/exercises/ExercisesCollection';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import { Divider } from 'primereact/divider';
import ExerciseList from './ExerciseList';

export const WorkoutDetailsPage = () => {
  const { workoutId } = useParams();
  const { workout, exercises } = useTracker(() => {
    Meteor.subscribe('workouts');
    Meteor.subscribe('exercises');
    const workout = Workouts.findOne(workoutId);
    const exercises = Exercises.find().fetch();
    return { workout, exercises };
  });

  if (!workout || !exercises) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Panel header={workout.name}>
        <Card className="workout-card">
          <p className="text-muted">{workout.description}</p>
          <Divider />
          <ul>
            <li>Total Sets: {workout.totalSets}</li>
            <li>Total Reps: {workout.totalReps}</li>
            <li>Total Weight: {workout.totalWeight} lbs</li>
          </ul>
        </Card>
      </Panel>
      <Divider />
      <Panel header="Exercises">
        <ExerciseList exercises={exercises} />
      </Panel>
    </>
  );
};
