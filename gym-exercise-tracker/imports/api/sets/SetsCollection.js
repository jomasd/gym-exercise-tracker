import { Mongo } from 'meteor/mongo';
import { Collection2 } from 'meteor/aldeed:collection2';
import SimpleSchema from 'simpl-schema';
export const Sets = new Mongo.Collection('sets');

const SetSchema = new SimpleSchema({
  exercise: {
    type: String,
    required: true,
  },
  setsCompleted: {
    type: Number,
    required: true,
  },
  repsCompleted: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
});

Sets.attachSchema(SetSchema);
