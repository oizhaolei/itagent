import React, { Component } from 'react';
import { withRouter } from 'react-router';

import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionSearch from 'material-ui/svg-icons/action/search';
import { blue500, yellow600 } from 'material-ui/styles/colors';

import PostItem from './PostItem';

class PostsList extends Component {
    newPost() {
        this.props.history.push('/posts/new');
    }

    componentWillMount() {
        this.props.fetchPosts();
    }

    renderAdd() {
        return (
            <div>
              <List>
                <ListItem
                    onTouchTap={() => this.newPost()}
                    leftAvatar={<Avatar icon={<ContentSend />} />}
                    rightIcon={<ContentAdd />}
                    primaryText="我要提问"
                />
              </List>
              <Divider inset={true} />
            </div>
        );
    }
    renderSearch() {
        return (
            <div>
              <List>
                <ListItem
                    leftAvatar={<Avatar icon={<ActionSearch />} />}
                    primaryText="关键字查询"
                />
              </List>
              <Divider inset={true} />
            </div>
        );
    }
    render() {
        const { posts, loading, error } = this.props.postsList;

        if(loading) {
            return <div className="container"><h1>Posts</h1><h3>Loading...</h3></div>;
        } else if(error) {
            return <div className="alert alert-danger">Error: {error.message}</div>;
        }
        return (
            <div className="center-content">
              {this.renderAdd()}
              <List>
                {posts.map((group) => (
                    <ListItem
                        key={group._id}
                        primaryText={group.title}
                        leftIcon={<ContentInbox />}
                        initiallyOpen={false}
                        primaryTogglesNestedList={true}
                        nestedItems={
                            group.list.map((item) => (
                                <PostItem
                                    key={item._id}
                                        post={item}
                                />
                            ))
                        }
                    />
                ))}
              </List>
              <Divider inset={true} />
              {this.renderSearch()}
            </div>
        );
    }
}

export default withRouter(PostsList);
