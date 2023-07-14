import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { WorkoutLists } from '../../api/workouts/WorkoutsCollection';

const WorkoutListDetails = ({ workoutList }) => {
  const { id } = useParams();

  useEffect(() => {
    Meteor.subscribe('workoutLists');
  }, [id]);

  if (!workoutList) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{workoutList.name}</h2>
      <p>Created at: {workoutList.createdAt.toLocaleString()}</p>
      <p>Updated at: {workoutList.updatedAt.toLocaleString()}</p>
      <h3>Exercises</h3>
      <ul>
        {workoutList.exercises.map((exerciseId) => (
          <li key={exerciseId}>{exerciseId}</li>
        ))}
      </ul>
    </div>
  );
};

export default withTracker(({ id }) => {
  return {
    workoutList: WorkoutLists.findOne(id),
  };
})(WorkoutListDetails);
