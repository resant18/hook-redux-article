import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
// import rootReducer from './reducers/rootReducer';
import articlesReducer from './reducers/articlesReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const preloadedState = {
   articles: [
      { _id: 1, title: "The Battle of Trump and Coronavirus" },
      { _id: 2, title: "How Nails Grow" },
      { _id: 3, title: "How is Homeschool Affects Parenting " },
   ]
}

export default (initialState = preloadedState) => {
   return createStore(articlesReducer, initialState, composeWithDevTools(applyMiddleware(thunk, logger)));
}