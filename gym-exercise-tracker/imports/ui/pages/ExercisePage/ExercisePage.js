import React from 'react';
import { useParams } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import { Exercises } from '../../../api/exercises/ExercisesCollection';
import { Sets } from '../../../api/sets/SetsCollection';
import SetList from '../../components/SetList';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import { Divider } from 'primereact/divider';

export const ExercisePage = () => {
  const { exerciseId } = useParams();
  const { exercise, sets } = useTracker(() => {
    Meteor.subscribe('exercises');
    Meteor.subscribe('sets');
    const exercise = Exercises.findOne(exerciseId);
    const sets = Sets.find({ exerciseId }).fetch();
    return { exercise, sets };
  });

  if (!exercise) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Panel header={exercise.name}>
        <Card className="exercise-card">
          <p className="text-muted">{exercise.description}</p>
          <Divider />
          <ul>
            <li>Max Weight: {exercise.maxWeight} lbs</li>
            <li>One-Rep Max: {exercise.oneRepMax} lbs</li>
            <li>Total Sets: {exercise.totalSets}</li>
            <li>Total Reps: {exercise.totalReps}</li>
            <li>Total Weight: {exercise.totalWeight} lbs</li>
          </ul>
        </Card>
      </Panel>
      <Divider />
      <Panel header="Sets">
        <SetList sets={sets} />
      </Panel>
    </>
  );
};
