# Gym Exercise Tracker

A web application built with MeteorJS and React to track gym exercises, sets, and reps.

## Features
- Track exercises, sets, and reps
- View total reps for each exercise
- View the maximum weight for each exercise
- User authentication

## Getting Started
1. Clone the repository: `git clone https://github.com/<username>/gym-exercise-tracker.git`
2. Change into the project directory: `meteor`
3. Install dependencies: `meteor npm install`
4. Run the app: `meteor`
5. Access the app in your browser at `http://localhost:3000`

## Building the App
1. **Define the purpose of the app and its features:**

   The purpose of the app is to track gym exercises, sets, and reps. The app should allow the user to:
   - Track exercises, sets, and reps.
   - View total reps for each exercise.
   - View the maximum weight for each exercise.
   - Have user authentication.

2. **Decide on the data structure and how it will be stored in collections:**

   - Create a collection called Exercises to store information about each exercise (e.g., name, description).
   - Create a collection called Sets to store information about each set of reps (e.g., exercise, sets completed, reps completed, weight).

3. **Determine the UI structure and how the user will interact with the app:**

   - Create a React component called `TrackExercise` to display a form where the user can enter information about a set of reps.
   - Create a React component called `ViewTotalReps` to display the total number of reps for each exercise.
   - Create a React component called `ViewMaxWeight` to display the maximum weight for each exercise.
   - Add user authentication using the `accounts-ui` and `accounts-password` packages.

4. **Create a new MeteorJS project using the `meteor create --react` command.**

5. **Define the data structure by creating collections in the `imports/api` folder.**

6. **Create React components in the `imports/ui` folder to display the data on the screen.**

7. **Add events to the components to handle user interactions (e.g., form submissions).**

8. **Create helpers to fetch data from collections and display it on the screen.**

9. **Add routing using the `react-router` package to navigate between different pages in the app.**

10. **Deploy the app using the `meteor deploy` command or a hosting service (e.g., Heroku, DigitalOcean).**
