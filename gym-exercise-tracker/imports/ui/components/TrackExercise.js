import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTracker } from 'meteor/react-meteor-data';
import { Exercises } from '../../api/exercises/ExercisesCollection';
import AddSetForm from './AddSetForm';
import SetList from './SetList';

const TrackExercise = ({ exerciseId }) => {
  const exercise = useTracker(() => Exercises.findOne(exerciseId));
  const [showAddSetForm, setShowAddSetForm] = useState(false);

  const handleAddSetClick = () => {
    setShowAddSetForm(true);
  };

  const handleAddSetFormClose = () => {
    setShowAddSetForm(false);
  };

  if (!exercise) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{exercise.name}</h1>
      <p>{exercise.description}</p>
      <button onClick={handleAddSetClick}>Add Set</button>
      {showAddSetForm && <AddSetForm exerciseId={exerciseId} onClose={handleAddSetFormClose} />}
      <SetList exerciseId={exerciseId} />
    </div>
  );
};

TrackExercise.propTypes = {
  exerciseId: PropTypes.string.isRequired,
};

export default TrackExercise;