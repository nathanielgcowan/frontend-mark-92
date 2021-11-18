import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import Favorite from './containers/Favorite';
import LeastFavorite from './containers/LeastFavorite';
import PostList from './containers/PostList';
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
      <Routes>
        <Route path="/" element={<App />}>
          <Route exact path="/food-list" element= {<PostList/>} />
          <Route exact path="/favorite" element= {<Favorite/>} />
          <Route exact path="/least-favorite" element= {<LeastFavorite/>} />
        </Route>
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root'));