import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Exercises } from '../../api/exercises/ExercisesCollection';
import ExerciseFormContainer from '../components/ExerciseFormContainer';

const ExercisePageContainer = ({ loading, exercise, match }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!exercise) {
    return <Redirect to="/exercises" />;
  }

  const { name, description, maxWeight, totalSets, totalReps, totalWeight, oneRepMax } = exercise;

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Text>Max Weight: {maxWeight}</Card.Text>
              <Card.Text>Total Sets: {totalSets}</Card.Text>
              <Card.Text>Total Reps: {totalReps}</Card.Text>
              <Card.Text>Total Weight: {totalWeight}</Card.Text>
              <Card.Text>One-Rep Max: {oneRepMax}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <ExerciseFormContainer exercise={exercise} />
        </Col>
      </Row>
    </Container>
  );
};

ExercisePageContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  exercise: PropTypes.object,
  match: PropTypes.object.isRequired,
};

export default withTracker(({ match }) => {
  const exerciseId = match.params._id;
  const subscription = Meteor.subscribe('exercises');
  const loading = !subscription.ready();
  const exercise = Exercises.findOne(exerciseId);

  return {
    loading,
    exercise,
  };
})(ExercisePageContainer);
