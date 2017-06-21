import React, {Component} from 'react';
import { withRouter } from 'react-router';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class BackBar extends Component {

    render() {
        return (
            <AppBar
                iconElementLeft={<IconButton onTouchTap={() => this.props.history.push('/')}><NavigationClose /></IconButton>}
            />
        );
    }
}

export default withRouter(BackBar);
