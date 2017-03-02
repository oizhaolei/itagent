import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Redux DevTools
import DevTools from './containers/DevTools';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Login from './views/Login';
import Main from './views/Main';
import Contacts from './views/tab_contacts';
import Tools from './views/tab_tools';
import Me from './views/tab_me';
import Search from './views/Search';
import Chat from './views/Chat';

import configureStore from './store/configureStore';

const store = configureStore();

const devtools = (process.env.NODE_ENV === 'production') ? <DevTools store={store} /> : '';

ReactDOM.render(
    <MuiThemeProvider>
        <div>
      <Provider store={store}>
        <Router history={browserHistory} >
          <Route path='/' component={Main} >
            <IndexRoute component={Contacts}/>
            <Route path="/tools" component={Tools}/>
            <Route path="/me" component={Me}/>
          </Route>
          <Route path='/login' component={Login}/>
          <Route path='/search' component={Search}/>
          <Route path='/chat' component={Chat}/>
        </Router>
      </Provider>
    {devtools}
        </div>
    </MuiThemeProvider>
    ,
    document.getElementById('app')
);
