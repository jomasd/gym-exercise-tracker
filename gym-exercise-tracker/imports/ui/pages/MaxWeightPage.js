import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Exercises } from '../../api/exercises/ExercisesCollection';
import { Sets } from '../../api/sets/SetsCollection';
import ViewMaxWeight from '../components/ViewMaxWeight.js';

export const MaxWeightPage = ({ exercises, sets }) => (
  <div>
    <h1>View Max Weight</h1>
    <ViewMaxWeight exercises={exercises} sets={sets} />
  </div>
);

export default withTracker(() => {
  Meteor.subscribe('exercises');
  Meteor.subscribe('sets');

  return {
    exercises: Exercises.find().fetch(),
    sets: Sets.find().fetch(),
  };
})(MaxWeightPage);