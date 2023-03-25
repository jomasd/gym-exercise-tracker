// imports/ui/components/AddExerciseForm.js
import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';

const AddExerciseForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [userId, setUserId] = "user1";
  const handleSubmit = (e) => {
    e.preventDefault();

    Meteor.call('exercises.insert', name, description, "user1" );
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Exercise</h2>
      <input
        type="text"
        placeholder="Exercise name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Exercise description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Exercise</button>
    </form>
  );
};

export default AddExerciseForm;
