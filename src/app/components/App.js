import React from 'react';
import {AppBar, LeftNav, MenuItem} from 'material-ui';
import { RouteHandler } from 'react-router';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Define menu items for LeftNav
let menuItems = [
  { route: '/', text: 'Home' },
  { route: 'about', text: 'About' },
  { route: 'contact', text: 'Contact' },
];

class App extends React.Component {

  constructor() {
    super();

    this._handleClick = this._handleClick.bind(this);
    this._getSelectedIndex = this._getSelectedIndex.bind(this);
    this._onLeftNavChange = this._onLeftNavChange.bind(this);
  }

  _handleClick(e) {
    e.preventDefault();

    this.refs.leftNav.toggle();
  }

  // Get the selected item in LeftMenu
  _getSelectedIndex() {
    let currentItem;

    for (let i = menuItems.length - 1; i >= 0; i--) {
      currentItem = menuItems[i];
      if (currentItem.route && this.context.router.isActive(currentItem.route)) {
        return i;
      }
    }
  }

  _onLeftNavChange(e, key, payload) {
    // Do DOM Diff refresh
    this.context.router.transitionTo(payload.route);
  }

  render() {

    return (
      <div id="page_container">

        <LeftNav
          ref="leftNav"
          docked={false}
          menuItems={menuItems}
          selectedIndex={this._getSelectedIndex()}
          onChange={this._onLeftNavChange} />

        <header>
          <AppBar title='MUI Routing' onLeftIconButtonTouchTap={this._handleClick} />
        </header>

        <section className="content">
          <RouteHandler />
        </section>

      </div>
    );
  }

}

module.exports = App;
