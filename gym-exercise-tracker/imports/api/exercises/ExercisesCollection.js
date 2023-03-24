import { Mongo } from 'meteor/mongo';
import { Collection2 } from 'meteor/aldeed:collection2';
import SimpleSchema from 'simpl-schema';
export const Exercises = new Mongo.Collection('exercises');

const ExerciseSchema = new SimpleSchema({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  });
  
Exercises.attachSchema(ExerciseSchema);