import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';

const ExerciseCard = ({ exercise }) => {
  const header = (
    <Avatar
      label={exercise.name.substring(0, 2).toUpperCase()}
      className="p-mr-2"
      style={{ backgroundColor: '#007ad9' }}
    />
  );

  const footer = (
    <div className="p-grid p-nogutter p-justify-between">
      <Button label="Details" icon="pi pi-info-circle" className="p-button-raised p-button-info" />
      <Button label="Manage" icon="pi pi-pencil" className="p-button-raised p-button-secondary" />
    </div>
  );

  return (
    <div className="p-col-6 p-md-3 p-lg-2 p-xl-1">
      <Card
        title={exercise.name}
        subTitle={exercise.description}
        footer={footer}
        header={header}
        className="p-shadow-3"
      >
        <div className="p-grid p-nogutter">
          <div className="p-col-6">Total Reps</div>
          <div className="p-col-6">{exercise.totalReps}</div>
          <div className="p-col-6">Highest Weight</div>
          <div className="p-col-6">{exercise.maxWeight}</div>
        </div>
      </Card>
    </div>
  );
};

export default ExerciseCard;
