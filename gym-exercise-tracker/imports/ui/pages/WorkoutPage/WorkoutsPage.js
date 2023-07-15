import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Workouts } from '../../api/workouts/WorkoutsCollection';
import { WorkoutsList } from '../components/WorkoutsList';

const WorkoutsPage = ({ workouts }) => (
  <div className="workouts-page">
    <h1>Workouts</h1>
    <WorkoutsList workouts={workouts} />
  </div>
);

export default withTracker(() => {
  Meteor.subscribe('workouts');

  return {
    workouts: Workouts.find().fetch(),
  };
})(WorkoutsPage);
