import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const intialState ={};

let middleware = [thunk];

const store = createStore(
  rootReducer,
  intialState,
  compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));