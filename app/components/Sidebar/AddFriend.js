import React from 'react';

class AddFriend extends React.Component {
  constructor() {
    super();
    this.addFriend = this.addFriend.bind(this);
  }
  addFriend(e) {
    const code = e.keyCode ? e.keyCode : e.which;
    if (code === 13 && !/^\s*$/.test(this.name.value)) {
      this.props.handler(this.name.value);
      this.name.value = '';
    }
  }
  render() {
    return (
      <div className="input-group add-friend">
        <input
          type="text"
          className="form-control add-friend-input"
          ref={(ref) => this.name = ref}
          placeholder="Add a friend"
          onKeyPress={this.addFriend}
        />
      </div>
    );
  }
}

AddFriend.propTypes = {
  handler: React.PropTypes.func.isRequired,
};

export default AddFriend;
