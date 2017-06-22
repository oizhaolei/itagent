import React from 'react';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import TextField from 'material-ui/TextField';
import { blue500, yellow600 } from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import RaisedButton from 'material-ui/RaisedButton';

import BottomTab from '../components/BottomTab';

const data = {
    name: '赵磊',
    title: '系统工程师',
    avatar: 'http://www.material-ui.com/images/jsa-128.jpg'
};

const handleExpand = () => {
};

const Me = () => (
    <div>
      <div className="center-in-center">
        <TextField
            hintText="sara.huang"
            floatingLabelText="eid"
            floatingLabelFixed={true}
        />
        <br />
        <TextField
            hintText="黄莎莎"
            floatingLabelText="姓名"
            floatingLabelFixed={true}
        />
        <br />
        <TextField
            hintText="G106"
            floatingLabelText="座位号"
            floatingLabelFixed={true}
        />
        <br />
        <RaisedButton label="提交" primary={true} type="submit" />
      </div>
      <div className="bottom">
        <BottomTab />
      </div>
    </div>
);

export default Me;
