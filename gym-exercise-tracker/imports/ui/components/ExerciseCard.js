import React, { useState, useEffect } from 'react';
import { ExerciseService } from './service/ExerciseService';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';

export default function ExerciseList() {
  const [exercises, setExercises] = useState([]);
  const [layout, setLayout] = useState('grid');

  useEffect(() => {
    ExerciseService.getExercises().then((data) => setExercises(data));
  }, []);

  const listItem = (exercise) => {
    return (
      <div className="p-4 border-1 surface-border surface-card border-round">
        <h2 className="text-2xl font-bold">{exercise.name}</h2>
        <p className="text-xl">{exercise.description}</p>
        <ul>
          <li>Max weight: {exercise.maxWeight}</li>
          <li>One rep max: {exercise.oneRepMax}</li>
          <li>Total reps: {exercise.totalReps}</li>
          <li>Total sets: {exercise.totalSets}</li>
          <li>Total weight: {exercise.totalWeight}</li>
        </ul>
      </div>
    );
  };

  const gridItem = (exercise) => {
    return (
      <div className="p-4 border-1 surface-border surface-card border-round">
        <h2 className="text-2xl font-bold">{exercise.name}</h2>
        <img src={`https://via.placeholder.com/150`} alt={exercise.name} />
        <p>{exercise.description}</p>
        <ul>
          <li>Max weight: {exercise.maxWeight}</li>
          <li>One rep max: {exercise.oneRepMax}</li>
          <li>Total reps: {exercise.totalReps}</li>
          <li>Total sets: {exercise.totalSets}</li>
          <li>Total weight: {exercise.totalWeight}</li>
        </ul>
      </div>
    );
  };

  const itemTemplate = (exercise, layout) => {
    if (!exercise) {
      return;
    }

    if (layout === 'list') return listItem(exercise);
    else if (layout === 'grid') return gridItem(exercise);
  };

  const header = () => {
    return (
      <div className="flex justify-content-end">
        <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
      </div>
    );
  };

  return (
    <div className="card">
      <DataView value={exercises} itemTemplate={itemTemplate} layout={layout} header={header()} />
    </div>
  );
}
