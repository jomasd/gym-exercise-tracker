import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Exercises } from '../../../api/exercises/ExercisesCollection';
import { Sets } from '../../../api/sets/SetsCollection';
import SetList from '../../components/SetList';

export const ExercisePage = () => {
  const { exerciseId } = useParams();
  const { exercise, sets } = useTracker(() => {
    Meteor.subscribe('exercises');
    Meteor.subscribe('sets');
    const exercise = Exercises.findOne(exerciseId);
    const sets = Sets.find({ exerciseId }).fetch();
    return { exercise, sets };
  });

  if (!exercise) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <Card bg="light" border={0} className="exercise-card">
            <Card.Body>
              <Card.Title>{exercise.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {exercise.description}
              </Card.Subtitle>
              <Card.Text>
                Max Weight: {exercise.maxWeight} lbs
                <br />
                One-Rep Max: {exercise.oneRepMax} lbs
                <br />
                Total Sets: {exercise.totalSets}
                <br />
                Total Reps: {exercise.totalReps}
                <br />
                Total Weight: {exercise.totalWeight} lbs
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <h2>Sets</h2>
          <SetList sets={sets} />
        </Col>
      </Row>
    </Container>
  );
};

