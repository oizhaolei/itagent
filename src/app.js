import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import {render} from 'react-dom';
import { Provider } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import HeaderContainer from './containers/HeaderContainer';

import Contacts from './views/tab_contacts';
import Tools from './views/tab_tools';
import Me from './views/tab_me';

import Login from './views/Login';
import Search from './views/Search';
import Chat from './views/Chat';
import PostNew from './views/PostNew';
import PostShow from './views/PostShow';
import PostEdit from './views/PostEdit';

import configureStore from './store/configureStore';

const store = configureStore();

render(
    <MuiThemeProvider>
    <Provider store={store}>
    <div>
    <Router>
    <div>
    <div className="top">
    <HeaderContainer />
    </div>
    <Route path="/" exact component={Contacts}/>
    <Route path="/tools" component={Tools}/>
    <Route path="/me" component={Me}/>

    <Route path="/posts/new" component={PostNew} />
    <Route path="/posts/:id" component={PostShow} />
    <Route path="/posts/:id/edit" component={PostEdit} />
    <Route path='/login' component={Login}/>
    <Route path='/search' component={Search}/>
    <Route path='/chat/:id' component={Chat}/>
    </div>
    </Router>
    </div>
    </Provider>
    </MuiThemeProvider>
    ,
    document.getElementById('app')
);
