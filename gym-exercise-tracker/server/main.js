// Import Meteor package
import { Meteor } from 'meteor/meteor';

// Import collections
import { Exercises } from '../imports/api/exercises/ExercisesCollection';
import { Sets } from '../imports/api/sets/SetsCollection';
import { Workouts } from '../imports/api/workouts/WorkoutsCollection';

// Import Sets methods and publications
import '../imports/api/sets/methods';
import '../imports/api/sets/publications';

// Import Exercises methods and publications
import '../imports/api/exercises/methods';
import '../imports/api/exercises/publications';

// Import Workouts methods and publications
import '../imports/api/workouts/methods';
import '../imports/api/workouts/publications';

// Import startup files
import '../imports/startup/server/exercises';
import '../imports/startup/server/sets';
import '../imports/startup/server/workouts';
