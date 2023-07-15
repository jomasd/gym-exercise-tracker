import React from 'react';
import { useParams } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Workouts } from '../../../api/workouts/WorkoutsCollection';
import { Workout } from '../../components/Workout';

const WorkoutDetailsPage = ({ workout }) => (
  <div className="workout-details-page">
    <h1>Workout Details</h1>
    {workout ? <Workout workout={workout} /> : <p>Loading...</p>}
  </div>
);

export default withTracker(() => {
  const { id } = useParams();
  Meteor.subscribe('workouts');

  return {
    workout: Workouts.findOne(id),
  };
})(WorkoutDetailsPage);
