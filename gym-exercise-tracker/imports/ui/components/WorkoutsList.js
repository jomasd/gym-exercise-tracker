import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useNavigate } from 'react-router-dom';

const WorkoutsList = ({ workouts }) => {
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  
  const navigate = useNavigate();

  const header = (
    <div className="p-clearfix">
      <h2>Workout List</h2>
    </div>
  );

  const workoutBodyTemplate = (rowData) => {
    return <span>{rowData.name}</span>;
  };

  const rowclickHandler = ({data}) => {
    navigate(`/workouts/${data._id}`);
  };

  return (
    <div className="card">
      <DataTable
        value={workouts}
        header={header}
        selectionMode="single"
        selection={selectedWorkout}
        onSelectionChange={(e) => setSelectedWorkout(e.value)}
        onRowClick={rowclickHandler}
      >
        <Column field="_id" header="ID" />
        <Column field="name" header="Name" body={workoutBodyTemplate} />
        {/* Add more columns for other workout details here */}
      </DataTable>
    </div>
  );
};

export default WorkoutsList;
