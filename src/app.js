import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import {render} from 'react-dom';
import { Provider } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Posts from './views/tab_posts';
import Me from './views/tab_me';

import Login from './views/Login';
import Search from './views/Search';
import PostNew from './views/PostNew';
import PostShow from './views/PostShow';

import configureStore from './store/configureStore';

const store = configureStore();

render(
    <MuiThemeProvider>
      <Provider store={store}>
        <div>
          <Router>
            <div>
              <Route path="/" exact component={Posts}/>
              <Route path="/me" component={Me}/>

              <Route path="/posts/new" component={PostNew} />
              <Route path="/post/:id" component={PostShow} />
              <Route path="/login" component={Login}/>
              <Route path="/search" component={Search}/>
            </div>
          </Router>
        </div>
      </Provider>
    </MuiThemeProvider>
    ,
    document.getElementById('app')
);
