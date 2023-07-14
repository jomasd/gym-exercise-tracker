import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch, useNavigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ExercisesPage } from './pages/ExercisesPage';
import { SetsPage } from './pages/SetsPage';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { TotalRepsPage } from './pages/TotalRepsPage';
import { MaxWeightPage } from './pages/MaxWeightPage';
import { ProfilePage } from './pages/ProfilePage';
import { ExercisePage} from '../ui/pages/ExercisePage/ExercisePage';
//import { WorkoutListsPage } from './pages/WorkoutListsPage';
import { NavbarMain } from '../../imports/ui/Navbar/navbarMain';

export const App = () => (
  <>
    <Router>
      <NavbarMain />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/exercises" element={<ExercisesPage />} />
          <Route path="/sets" element={<SetsPage />} />
          <Route path="/totalreps" element={<TotalRepsPage />} />
          <Route path="/maxweight" element={<MaxWeightPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/exercises/:exerciseId" element={<ExercisePage />} />
          <Route path="/workoutLists" element={<WorkoutListsPage />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
    </Router>
  </>
);
