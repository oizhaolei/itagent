import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import HeaderContainer from '../containers/HeaderContainer';
import CardExampleWithAvatar from '../components/CardExampleWithAvatar';
import BottomNavigationExampleSimple from '../components/BottomNavigationExampleSimple';

const styles = {
  top: {
    position: 'fixed',
    width: '100%',
    WebkitAppRegion: 'drag'
  },
  center_content: {
    paddingTop: '50px',
    paddingBottom: '50px',
  },
  bottom: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    zIndex: 9,
  }
};

const Main = ({ children}) => (
    <div>
    <div style={styles.top}>
    <HeaderContainer />
    </div>
    <div style={styles.center_content}>
    {children}
    </div>
    <div style={styles.bottom}>
    <BottomNavigationExampleSimple />
    </div>
    </div>
);

export default Main;
