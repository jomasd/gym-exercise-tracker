import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Workouts } from '../../api/workouts/WorkoutsCollection';
import { Workout } from '../components/Workout';

const WorkoutsPage = ({ workouts }) => (
  <div className="workouts-page">
    <h1>Workouts</h1>
    {workouts.map((workout) => (
      <Workout key={workout._id} workout={workout} />
    ))}
  </div>
);

export default withTracker(() => {
  Meteor.subscribe('workouts');

  return {
    workouts: Workouts.find().fetch(),
  };
})(WorkoutsPage);
