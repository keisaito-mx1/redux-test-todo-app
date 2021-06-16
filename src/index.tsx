import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import AppPage from './app/components/pages/AppPage';
import Success from './app/components/pages/SuccessPage';
import TodoListPage from './app/components/pages/TodoListPage';
import { store } from './app/store';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Route exact component={AppPage} path="/" />
        <Route exact component={Success} path="/success" />
        <Route exact component={TodoListPage} path="/tasks" />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
