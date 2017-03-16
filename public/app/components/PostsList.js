import React, {Component} from 'react';
import { Link } from 'react-router';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

class PostsList extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderAdd() {
    return (
          <Link to="posts/new">
            <GridTile
          title="Add"
            >
            </GridTile>
          </Link>
      );
  }
  render() {
    const { posts, loading, error } = this.props.postsList;
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: '100%',
    overflowY: 'auto',
  },
};

    if(loading) {
      return <div className="container"><h1>Posts</h1><h3>Loading...</h3></div>;
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>;
    }
    return (
        <div style={styles.root}>
        <GridList
      cellHeight={180}
      style={styles.gridList}
        >
        <Subheader>December</Subheader>
        {this.renderAdd()}
        {posts.map((tile) => (
            <Link
          key={tile.img}
          to={"posts/" + tile._id}
            >
            <GridTile
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
            >
            <img src={tile.img} />
            </GridTile>
          </Link>
        ))}
      </GridList>
        </div>
    );
  }
}

export default PostsList;
