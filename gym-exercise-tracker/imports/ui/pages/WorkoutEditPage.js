import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Workouts } from '../../api/workouts/WorkoutsCollection';

const WorkoutEditPage = ({ workout }) => {
  const [name, setName] = useState(workout ? workout.name : '');

  const handleSubmit = (event) => {
    event.preventDefault();

    Meteor.call('workouts.update', workout._id, name, (error) => {
      if (error) {
        alert(error.message);
      } else {
        alert('Workout updated successfully!');
      }
    });
  };

  return (
    <div className="workout-edit-page">
      <h1>Edit Workout</h1>
      {workout ? (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <button type="submit">Update Workout</button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default withTracker(() => {
  const { id } = useParams();
  Meteor.subscribe('workouts');

  return {
    workout: Workouts.findOne(id),
  };
})(WorkoutEditPage);
