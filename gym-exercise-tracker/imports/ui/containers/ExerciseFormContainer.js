import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { AutoForm, AutoField, ErrorsField } from 'uniforms-bootstrap4';
import { ExerciseSchema } from '../../api/exercises/ExercisesCollection';

const ExerciseFormContainer = ({ exercise, formTitle, handleCancel }) => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (doc) => {
    setSubmitting(true);
    const method = exercise ? 'exercises.update' : 'exercises.insert';
    const args = exercise ? { _id: exercise._id, ...doc } : [doc];
    Meteor.call(method, ...args, (error) => {
      setSubmitting(false);
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert(`Exercise ${exercise ? 'updated' : 'added'}!`, 'success');
        if (handleCancel) {
          handleCancel();
        }
      }
    });
  };

  return (
    <div>
      <h4>{formTitle}</h4>
      <AutoForm schema={ExerciseSchema} onSubmit={handleSubmit} model={exercise}>
        <Form.Group controlId="formBasicName">
          <AutoField name="name" />
        </Form.Group>
        <Form.Group controlId="formBasicDescription">
          <AutoField name="description" />
        </Form.Group>
        <Form.Group>
          <Button type="submit" variant="primary" disabled={submitting}>
            {submitting ? 'Saving...' : 'Save'}
          </Button>
          {handleCancel && (
            <Button variant="secondary" onClick={handleCancel}>
              Cancel
            </Button>
          )}
        </Form.Group>
        <ErrorsField />
      </AutoForm>
    </div>
  );
};

ExerciseFormContainer.propTypes = {
  exercise: PropTypes.object,
  formTitle: PropTypes.string.isRequired,
  handleCancel: PropTypes.func,
};

export default ExerciseFormContainer;
