import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

const AddWorkoutListForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    Meteor.call('workoutLists.insert', name, "user1");
    setName('');
  };

  return (
    <Card title="Add Workout List">
      <form onSubmit={handleSubmit} className="p-fluid">
        <div className="p-field">
          <label htmlFor="name">Workout List Name</label>
          <InputText
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter workout list name"
          />
        </div>
        <Button type="submit" label="Add Workout List" />
      </form>
    </Card>
  );
};

export default AddWorkoutListForm;
