import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

const AddSetForm = ({ exercises }) => {
  const [exerciseId, setExerciseId] = useState('');
  const [setsCompleted, setSetsCompleted] = useState('');
  const [repsCompleted, setRepsCompleted] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    Meteor.call('sets.insert', exerciseId, Number(setsCompleted), Number(repsCompleted), Number(weight));
    setExerciseId('');
    setSetsCompleted('');
    setRepsCompleted('');
    setWeight('');
  };

  return (

      <form onSubmit={handleSubmit} className="p-fluid">
        <div className="p-field">
          <label htmlFor="exercise">Exercise</label>
          <Dropdown
            id="exercise"
            value={exerciseId}
            options={exercises.map((exercise) => ({ label: exercise.name, value: exercise._id }))}
            onChange={(e) => setExerciseId(e.value)}
            placeholder="Select exercise"
          />
        </div>
        <div className="p-field">
          <label htmlFor="sets">Sets completed</label>
          <InputNumber
            id="sets"
            value={setsCompleted}
            onValueChange={(e) => setSetsCompleted(e.value)}
            placeholder="Enter sets completed"
            min={1}
            max={99}
          />
        </div>
        <div className="p-field">
          <label htmlFor="reps">Reps completed</label>
          <InputNumber
            id="reps"
            value={repsCompleted}
            onValueChange={(e) => setRepsCompleted(e.value)}
            placeholder="Enter reps completed"
            min={1}
            max={99}
          />
        </div>
        <div className="p-field">
          <label htmlFor="weight">Weight (lbs)</label>
          <InputNumber
            id="weight"
            value={weight}
            onValueChange={(e) => setWeight(e.value)}
            placeholder="Enter weight"
            min={1}
            max={999}
          />
        </div>
        <Button type="submit" label="Add Set" />
      </form>

  );
};

export default AddSetForm;
