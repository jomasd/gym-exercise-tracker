import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Exercises } from '../../api/exercises/ExercisesCollection';
import { Sets } from '../../api/sets/SetsCollection';
import ExerciseList  from '../components/ExerciseList';
import AddExerciseForm from '../components/AddExerciseForm';
import AddSetForm from '../components/AddSetForm';
import SetList from '../components/SetList';




const ExerciseTracker = ({exercises, sets}) => (
  <div>
    <AddExerciseForm />
    <ExerciseList  exercises={exercises} />
    <AddSetForm exercises={exercises} />
    <SetList sets={sets} />
  </div>
);

export default withTracker(() => {
  Meteor.subscribe('exercises');
  Meteor.subscribe('sets');

  return {
    exercises: Exercises.find().fetch(),
    sets: Sets.find().fetch(),
  };
})(ExerciseTracker);
