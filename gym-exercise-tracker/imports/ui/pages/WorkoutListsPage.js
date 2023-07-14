import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { WorkoutLists } from '../../api/workout/WorkoutCollection';
import WorkoutListList from '../components/WorkoutListList';

const WorkoutListsPage = ({ workoutLists }) => {
  return (
    <div>
      <h1>Workout Lists</h1>
      <WorkoutListList workoutLists={workoutLists} />
    </div>
  );
};

export default withTracker(() => {
  Meteor.subscribe('workoutLists');
  return {
    workouts: Workout.find().fetch(),
  };
})(WorkoutListsPage);
