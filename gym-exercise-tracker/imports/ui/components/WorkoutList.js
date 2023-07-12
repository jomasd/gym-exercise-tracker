import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useNavigate } from 'react-router-dom';

const WorkoutList = ({ workoutLists }) => {
  const [selectedWorkoutList, setSelectedWorkoutList] = useState(null);
  
  const navigate = useNavigate();

  const header = (
    <div className="p-clearfix">
      <h2>Workout List</h2>
    </div>
  );

  
  const nameBodyTemplate = (rowData) => {
    return <span>{rowData.name}</span>;
  };

  const updatedAtBodyTemplate = (rowData) => {
    const date = new Date(rowData.updatedAt);
    return <span>{date.toLocaleString()}</span>;
  };
  const rowclickHandler = ({data}) => {
    // Navigate to the details page for the selected row
    navigate(`/workoutLists/${data._id}`);
    console.log(data._id); 
  };
  return (
    <div className="card">
      <DataTable
        value={workoutLists}
        header={header}
        selectionMode="single"
        selection={selectedWorkoutList}
        onSelectionChange={(e) => setSelectedWorkoutList(e.value)}
        onRowClick={rowclickHandler}
      >
        <Column field="_id" header="ID" />
        <Column field="name" header="Name" body={nameBodyTemplate} />
        <Column field="updatedAt" header="Updated At" body={updatedAtBodyTemplate} />
      </DataTable>
    </div>
  );
};
export default WorkoutList;
