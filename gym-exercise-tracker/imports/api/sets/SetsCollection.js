import { Mongo } from 'meteor/mongo';
import { Collection2 } from 'meteor/aldeed:collection2';
import SimpleSchema from 'simpl-schema';
export const Sets = new Mongo.Collection('sets');

export const SetSchema = new SimpleSchema({
  exerciseId: {
    type: String,
    label: 'Exercise ID',
  },
  weight: {
    type: Number,
    label: 'Weight',
  },
  reps: {
    type: Number,
    label: 'Reps Completed',
  },
  setsCompleted: {
    type: Number,
    label: 'Sets Completed',
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
});

Sets.attachSchema(SetSchema);
