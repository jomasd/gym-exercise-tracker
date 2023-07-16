import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useNavigate } from 'react-router-dom';
import { Exercises } from '../../api/exercises/ExercisesCollection';

export const WorkoutExercisesList = ({ exercises }) => {
  const navigate = useNavigate();

  const exercisesData = useTracker(() => {
    return Exercises.find({}).fetch();
  });

  const getExerciseName = (id) => {
    const exercise = exercisesData.find(exercise => exercise._id === id);
    return exercise ? exercise.name : 'Exercise not found';
  };

  const header = (
    <div className="p-clearfix">
      <h2>Exercise List</h2>
    </div>
  );

  const exerciseBodyTemplate = (rowData) => {
    return <span>{getExerciseName(rowData.exerciseId)}</span>;
  };

  const rowclickHandler = ({data}) => {
    navigate(`/exercises/${data.exerciseId}`);
  };

  return (
    <div className="card">
      <DataTable
        value={exercises}
        header={header}
        selectionMode="single"
        onRowClick={rowclickHandler}
      >
        <Column field="exerciseId" header="Exercise ID" body={exerciseBodyTemplate} />
        <Column field="recommendedSets" header="Recommended Sets" />
        <Column field="recommendedReps" header="Recommended Reps" />
      </DataTable>
    </div>
  );
};
