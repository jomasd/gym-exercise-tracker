import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Exercise Tracker</h1>
      <nav>
        <ul>
          <li><Link to="/exercises">View Exercises</Link></li>
          <li><Link to="/sets">View Sets</Link></li>
          <li><Link to="/workouts">View Workout Lists</Link></li>
        </ul>
      </nav>
    </div>
  );
};
