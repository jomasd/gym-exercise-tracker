import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Exercises } from '../../api/exercises/ExercisesCollection';
import { Sets } from '../../api/sets/SetsCollection';
import ExerciseList from '../components/ExerciseList';
import AddExerciseForm from '../components/AddExerciseForm';
import AddSetForm from '../components/AddSetForm';
import SetList from '../components/SetList';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const ExerciseTracker = ({ exercises, sets }) => {
  const [showAddExerciseDialog, setShowAddExerciseDialog] = useState(false);
  const [showAddSetDialog, setShowAddSetDialog] = useState(false);

  const renderFooter = (name) => {
    return (
      <div>
        <Button label="Cancel" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
      </div>
    );
  };

  const onHide = (name) => {
    if (name === 'exercise') {
      setShowAddExerciseDialog(false);
    } else {
      setShowAddSetDialog(false);
    }
  };

  return (
    <div>
      <Button label="Add Exercise" onClick={() => setShowAddExerciseDialog(true)} />
      <Button label="Add Set" onClick={() => setShowAddSetDialog(true)} />

      <Dialog
        header="Add Exercise"
        visible={showAddExerciseDialog}
        style={{ width: '50vw' }}
        onHide={() => onHide('exercise')}
        footer={renderFooter('exercise')}
      >
        <AddExerciseForm />
      </Dialog>

      <Dialog
        header="Add Set"
        visible={showAddSetDialog}
        style={{ width: '50vw' }}
        onHide={() => onHide('set')}
        footer={renderFooter('set')}
      >
        <AddSetForm exercises={exercises} />
      </Dialog>

      <ExerciseList exercises={exercises} />
    </div>
  );
};

export default withTracker(() => {
  Meteor.subscribe('exercises');
  Meteor.subscribe('sets');

  return {
    exercises: Exercises.find().fetch(),
    sets: Sets.find().fetch(),
  };
})(ExerciseTracker);
