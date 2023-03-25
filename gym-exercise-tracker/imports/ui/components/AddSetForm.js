// imports/ui/components/AddSetForm.js
import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';

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
        <form onSubmit={handleSubmit}>
            <h2>Add Set</h2>
            <select value={exerciseId} onChange={(e) => setExerciseId(e.target.value)}>
                <option value="">Select exercise</option>
                {exercises.map((exercise) => (
                    <option key={exercise._id} value={exercise._id}>{exercise.name}</option>
                ))}
            </select>
            <input
                type="number"
                placeholder="Sets completed"
                value={setsCompleted}
                onChange={(e) => setSetsCompleted(e.target.value)}
            />
            <input
                type="number"
                placeholder="Reps completed"
                value={repsCompleted}
                onChange={(e) => setRepsCompleted(e.target.value)}
            />
            <input
                type="number"
                placeholder="Weight (lbs)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
            />
            <button type="submit">Add Set</button>
        </form>
    );
};

export default AddSetForm;
