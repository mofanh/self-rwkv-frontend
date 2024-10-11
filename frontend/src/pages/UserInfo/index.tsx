import React, { Component } from 'react';
import { connect } from 'umi';

@connect(({ user }) => ({
  user,
}))
class UserInfo extends Component {
  constructor(props) {
    super(props);
    console.log('UserInfo-', props)
  }
  render(props) {
    console.log('UserInfo props-', props)
    // return <div>'this.props.user?.name'</div>;
    return <div>{this.props.user.user.name}</div>;
  }
}

export default UserInfo;