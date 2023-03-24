import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarMain from './Navbar/navbarMain';
import HomePage from './pages/HomePage';
import ExercisesPage from './pages/ExercisesPage';
import SetsPage from './pages/SetsPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import TotalRepsPage from './pages/TotalRepsPage';
import MaxWeightPage from './pages/MaxWeightPage';
import ProfilePage from './pages/ProfilePage';

export const App = () => (
  <>
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
      <Router>
        <NavbarMain />
        <Container fluid>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/exercises" element={<ExercisesPage />} />
            <Route path="/sets/:exerciseId" element={<SetsPage />} />
            <Route path="/totalreps" element={<TotalRepsPage />} />
            <Route path="/maxweight" element={<MaxWeightPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  </>
);