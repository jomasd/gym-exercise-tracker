import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useHistory } from 'react-router-dom'; 

const ExerciseList = ({ exercises }) => {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const rowclickHandler = (e) => {

    console.log('clicked it'); 
  };


  const header = (
    <div className="p-clearfix">
      <h2>Exercise List</h2>
    </div>
  );

  const exerciseBodyTemplate = (rowData) => {
    return <span>{rowData.name}</span>;
  };

  const descriptionBodyTemplate = (rowData) => {
    return <span>{rowData.description}</span>;
  };

  const maxWeightBodyTemplate = (rowData) => {
    return <span>{rowData.maxWeight}</span>;
  };

  const oneRepMaxBodyTemplate = (rowData) => {
    return <span>{rowData.oneRepMax}</span>;
  };

  const totalSetsBodyTemplate = (rowData) => {
    return <span>{rowData.totalSets}</span>;
  };

  const totalRepsBodyTemplate = (rowData) => {
    return <span>{rowData.totalReps}</span>;
  };

  const totalWeightBodyTemplate = (rowData) => {
    return <span>{rowData.totalWeight}</span>;
  };

  const updatedAtBodyTemplate = (rowData) => {
    const date = new Date(rowData.updatedAt);
    return <span>{date.toLocaleString()}</span>;
  };

  return (
    <div className="card">
      <DataTable
        value={exercises}
        header={header}
        selectionMode="single"
        selection={selectedExercise}
        onSelectionChange={(e) => setSelectedExercise(e.value)}
        onClick={rowclickHandler}
      >
        <Column field="_id" header="ID" />
        <Column field="name" header="Name" body={exerciseBodyTemplate} />
        <Column field="description" header="Description" body={descriptionBodyTemplate} />
        <Column field="maxWeight" header="Max Weight" body={maxWeightBodyTemplate} />
        <Column field="oneRepMax" header="One Rep Max" body={oneRepMaxBodyTemplate} />
        <Column field="totalSets" header="Total Sets" body={totalSetsBodyTemplate} />
        <Column field="totalReps" header="Total Reps" body={totalRepsBodyTemplate} />
        <Column field="totalWeight" header="Total Weight" body={totalWeightBodyTemplate} />
        <Column field="updatedAt" header="Updated At" body={updatedAtBodyTemplate} />
      </DataTable>
    </div>
  );
};
export default ExerciseList;