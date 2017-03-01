import React, {Component} from 'react';
import { withRouter } from 'react-router';

import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconMessage from 'material-ui/svg-icons/communication/message';
import IconChat from 'material-ui/svg-icons/communication/business';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <IconMessage />;
const favoritesIcon = <IconChat />;
const nearbyIcon = <IconLocationOn />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavigationExampleSimple extends Component {
    
    getStyles() {
        return {
            bottom: {
                position: 'fixed',
                bottom: 0,
                width: '100%',
            }
        };
    }

    state = {
        selectedIndex: 0,
    };

    select = (index) => this.setState({selectedIndex: index});

    render() {
        const styles = this.getStyles();
        return (
            <Paper style={styles.bottom} zDepth={1}>
            <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
            label="在线"
            icon={recentsIcon}
            onTouchTap={() => {this.select(0);this.props.router.push('/');}}
            />
            <BottomNavigationItem
            label="工具"
            icon={favoritesIcon}
            onTouchTap={() => {this.select(1);this.props.router.push('/tools');}}
            />
            <BottomNavigationItem
            label="我的"
            icon={nearbyIcon}
            onTouchTap={() => {this.select(2);this.props.router.push('/me');}}
            />
            </BottomNavigation>
            </Paper>
        );
    }
}

export default withRouter(BottomNavigationExampleSimple);
