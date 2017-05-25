import React, {Component} from 'react';
import { withRouter } from 'react-router';

import TextField from 'material-ui/TextField';

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavigationExampleSimple extends Component {

  render() {
    const styles = {
      full_width: {
        width: '100%',
      },
    };
    return (
        <div>
        <TextField
      style={styles.full_width}
      placeholder="说点什么"
        />
        </div>
    );
  }
}

export default withRouter(BottomNavigationExampleSimple);
