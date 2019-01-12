import React from 'react';

class DialogsGroup extends React.Component {
  constructor (props) {
    super(props);
    this.props = props;
    this.state = {isToggleOn:true}
    this.handleClickOnUser = this.handleClickOnUser.bind(this);
  }

  handleClickOnUser (e) {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render () {
    let state = this.props.store.getState();
    let users = state.components.dialogs;
    let userGroup = users.map((user, index) => {
      // let isUserSelected = currentUserId === user.id;
      // let colorOfUser = isUserSelected ? 'user-item' : '';

      return <li key={index} onClick={ this.handleClickOnUser }> {user.name} {this.state.isToggleOn ? 'ON' : 'OFF'}</li>;
  });

    return (
      <div className = 'group-list'>
        <ul>
          {userGroup}
        </ul>
      </div>
    )
  }

}

export default DialogsGroup;