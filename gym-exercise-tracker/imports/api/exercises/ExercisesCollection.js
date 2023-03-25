import { Mongo } from 'meteor/mongo';
import { Collection2 } from 'meteor/aldeed:collection2';
import SimpleSchema from 'simpl-schema';
export const Exercises = new Mongo.Collection('exercises');

export const ExerciseSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
    max: 100,
  },
  description: {
    type: String,
    label: 'Description',
  },
  userId: {
    type: String,
    label: 'User ID',
  },
  createdAt: {
    type: Date,
    label: 'Created At',
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();
      }
    },
  },
  updatedAt: {
    type: Date,
    label: 'Updated At',
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    optional: true,
  },
  oneRepMax: {
    type: Number,
    label: 'One-Rep Max',
    optional: true,
  },
  maxWeight: {
    type: Number,
    label: 'Max Weight',
    optional: true,
  },
  totalSets: {
    type: Number,
    label: 'Total Sets',
    optional: true,
  },
  totalReps: {
    type: Number,
    label: 'Total Reps',
    optional: true,
  },
  totalWeight: {
    type: Number,
    label: 'Total Weight',
    optional: true,
  },
});
  
Exercises.attachSchema(ExerciseSchema);