import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Card, Col, Row } from 'react-bootstrap';
import ExerciseList from '../components/ExerciseList';
import { Exercises } from '../../api/exercises/ExercisesCollection';

const ExerciseListContainer = () => {
  const exercises = useTracker(() => {
    Meteor.subscribe('exercises');
    return Exercises.find().fetch();
  });

  return (
    <div>
      <h2>Exercises</h2>
      <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className="g-4">
        {exercises.map((exercise) => (
          <Col key={exercise._id}>
            <Card elevation={2}>
              <Card.Body>
                <Card.Title>{exercise.name}</Card.Title>
                <Card.Text>{exercise.description}</Card.Text>
                <hr />
                <Card.Text>Max Weight: {exercise.maxWeight}</Card.Text>
                <Card.Text>Total Sets: {exercise.totalSets}</Card.Text>
                <Card.Text>Total Reps: {exercise.totalReps}</Card.Text>
                <Card.Text>Total Weight: {exercise.totalWeight}</Card.Text>
                <Card.Text>One-Rep Max: {exercise.oneRepMax}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ExerciseListContainer;
