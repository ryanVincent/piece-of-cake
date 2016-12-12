# Cake Test

## Getting Started

To run application

```
git clone https://github.com/ryanVincent/piece-of-cake/
cd .\piece-of-cake\
npm install
npm start
```

To run tests 

```
npm test
```

## Architecture

The state is managed using a Redux store. This is overkill for an application this small but I wanted to showcase my ability to work within the Redux ecosystem. Taking this further I would have integrated a library like Reselect to manage derived data and possibly Normalizr or Immutable.js to make managing the state easier.

## Tests

I've tested all reducer logic and action creators within the application. I've also added smoke tests for all primary components. Finally, I've added component tests around some of the key functionality of the app such as the search and ensuring that the edit cake form is populated with the correct values. Taking this further I would have ensured 100% test coverage across functions and components. I would also implement some end to end tests using a framework like Sellenium.

I've used Enzyme for rendering components within the test runner. 
