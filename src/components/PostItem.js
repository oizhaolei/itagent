import React, {Component} from 'react';
import { withRouter } from 'react-router';

import Avatar from 'material-ui/Avatar';
import {ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';

class PostItem extends Component {
    post(id) {
        this.props.history.push('/post/' + id);
    }

    render() {
        const { post } = this.props;
        return (
            <ListItem
                onTouchTap={() => this.post(post._id)}
                leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={yellow600} />}
                rightIcon={<ActionInfo />}
                primaryText={post.title}
                secondaryText={post.create_date}
            />
        );
    }
}

export default withRouter(PostItem);
