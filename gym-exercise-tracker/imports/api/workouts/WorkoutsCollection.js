import { Mongo } from 'meteor/mongo';
import { Collection2 } from 'meteor/aldeed:collection2';
import SimpleSchema from 'simpl-schema';
export const Workouts = new Mongo.Collection('workouts');

export const WorkoutSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
    max: 100,
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
  exercises: {
    type: Array,
    label: 'Exercises',
    optional: true,
  },
  'exercises.$': {
    type: String,
    label: 'Exercise',
  },
});
  
Workouts.attachSchema(WorkoutSchema);
