import { withTracker } from 'meteor/react-meteor-data';
import { Exercises } from '../../api/exercises/ExercisesCollection';
import { Sets } from '../../api/sets/SetsCollection';
import ViewMaxWeight from '../components/ViewMaxWeight';

export const ViewMaxWeightContainer = ({ exercises, sets }) => {
  // Create a map of exercises with their respective max weight
  const maxWeightMap = {};
  exercises.forEach((exercise) => {
    const maxWeight = sets
      .find({ exerciseId: exercise._id })
      .fetch()
      .reduce((max, set) => (set.weight > max ? set.weight : max), 0);
    maxWeightMap[exercise._id] = maxWeight;
  });

  return <ViewMaxWeight maxWeightMap={maxWeightMap} />;
};

export default withTracker(() => {
  Meteor.subscribe('exercises');
  Meteor.subscribe('sets');

  return {
    exercises: Exercises.find().fetch(),
    sets: Sets.find().fetch(),
  };
})(ViewMaxWeightContainer);
