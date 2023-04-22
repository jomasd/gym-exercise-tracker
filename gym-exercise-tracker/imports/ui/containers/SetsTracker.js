import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Exercises } from '../../api/exercises/ExercisesCollection';
import { Sets } from '../../api/sets/SetsCollection';
import AddSetForm from '../components/AddSetForm';
import SetList from '../components/SetList';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const SetsTracker = ({ exercises, sets }) => {
  const [showAddSetDialog, setShowAddSetDialog] = useState(false);

  const renderFooter = () => {
    return (
      <div>
        <Button label="Cancel" icon="pi pi-times" onClick={() => setShowAddSetDialog(false)} className="p-button-text" />
      </div>
    );
  };

  return (
    <div>
      <Button label="Add Set" onClick={() => setShowAddSetDialog(true)} />
      
      <Dialog
        header="Add Set"
        visible={showAddSetDialog}
        style={{ width: '50vw' }}
        onHide={() => setShowAddSetDialog(false)}
        footer={renderFooter()}
      >
        <AddSetForm exercises={exercises} />
      </Dialog>

      <SetList sets={sets} />
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
})(SetsTracker);
