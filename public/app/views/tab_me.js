import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';

const data = {
  name: '赵磊',
  title: '系统工程师',
  avatar: 'http://www.material-ui.com/images/jsa-128.jpg'
};
const Me = () => (
  <div>
  <Card>
    <CardHeader
      title={data.name}
      subtitle={data.title}
      avatar={data.avatar}
    />
  </Card>
    <List>
      <Subheader inset={true}>Folders</Subheader>
      <ListItem
        leftAvatar={<Avatar icon={<FileFolder />} />}
        rightIcon={<ActionInfo />}
        primaryText="Photos"
        secondaryText="Jan 9, 2014"
      />
      <ListItem
        leftAvatar={<Avatar icon={<FileFolder />} />}
        rightIcon={<ActionInfo />}
        primaryText="Recipes"
        secondaryText="Jan 17, 2014"
      />
      <ListItem
        leftAvatar={<Avatar icon={<FileFolder />} />}
        rightIcon={<ActionInfo />}
        primaryText="Work"
        secondaryText="Jan 28, 2014"
      />
    </List>
    <Divider inset={true} />
    <List>
      <Subheader inset={true}>本机信息</Subheader>
      <ListItem
        leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
        rightIcon={<ActionInfo />}
        primaryText="Vacation itinerary"
        secondaryText="Jan 20, 2014"
      />
      <ListItem
        leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
        rightIcon={<ActionInfo />}
        primaryText="Kitchen remodel"
        secondaryText="Jan 10, 2014"
      />
    </List>
  </div>
);

export default Me;
