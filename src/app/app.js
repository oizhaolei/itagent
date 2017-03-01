import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Redux DevTools
import DevTools from './containers/DevTools';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Main from './views/Main';
import Chat from './views/Chat';
import Tools from './views/Tools';
import Me from './views/Me';
import Login from './views/Login';

import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
    <MuiThemeProvider>
    <Provider store={store}>
    <Router history={hashHistory} >
      <Route path='/' component={Main} >
        <IndexRoute component={Chat}/>
        <Route path="/tools" component={Tools}/>
        <Route path="/me" component={Me}/>
      </Route>
      <Route path='/login' component={Login}/>
    </Router>
    </Provider>
    </MuiThemeProvider>
    ,
    document.getElementById('app')
);
