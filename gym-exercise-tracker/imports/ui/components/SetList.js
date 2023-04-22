import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {Exercises} from '../../api/exercises/ExercisesCollection';

const SetsList = ({ sets }) => {


  const header = (
    <div className="table-header">
      List of Sets
    </div>
  );

  const footer = `There are ${sets.length} sets in total.`;

  const nameBodyTemplate = (rowData) => {
    const exercise = Exercises.findOne(rowData.exerciseId);
    return (
      <React.Fragment>
        {exercise.name}
      </React.Fragment>
    );
  }

  const weightBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        {rowData.weight} lbs
      </React.Fragment>
    );
  }

  const repsBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        {rowData.reps}
      </React.Fragment>
    );
  }
  const setCompletedBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        {rowData.setsCompleted}
      </React.Fragment>
    );
  }
  return (
    <DataTable removableSort value={sets} header={header} footer={footer} className="p-datatable-customers">
      <Column field="name" header="Name" body={nameBodyTemplate} sortable></Column>
      <Column field="weight" header="Weight" body={weightBodyTemplate} sortable></Column>
      <Column field="setCompleted" header="Sets" body={setCompletedBodyTemplate} sortable></Column>
      <Column field="reps" header="Reps" body={repsBodyTemplate} sortable></Column>
    </DataTable>
  );
}

export default SetsList;
