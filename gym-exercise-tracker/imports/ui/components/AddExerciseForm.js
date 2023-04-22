import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

const AddExerciseForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    Meteor.call('exercises.insert', name, description, "user1");
    setName('');
    setDescription('');
  };

  return (
    <Card title="Add Exercise">
      <form onSubmit={handleSubmit} className="p-fluid">
        <div className="p-field">
          <label htmlFor="name">Exercise Name</label>
          <InputText
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter exercise name"
          />
        </div>
        <div className="p-field">
          <label htmlFor="description">Exercise Description</label>
          <InputText
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter exercise description"
          />
        </div>
        <Button type="submit" label="Add Exercise" />
      </form>
    </Card>
  );
};

export default AddExerciseForm;
