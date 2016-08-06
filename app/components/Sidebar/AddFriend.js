import React from 'react';

class AddFriend extends React.Component {
  constructor() {
    super();
    this.addFriend = this.addFriend.bind(this);
  }
  addFriend(e) {
    const code = e.keyCode ? e.keyCode : e.which;
    if (code === 13) {
      this.props.handler(this.name.value);
      this.name.value = '';
    }
  }
  render() {
    const inputStyle = {
      height: '50px',
      borderRadius: '0',
      backgroundColor: '#f8f8f8',
      border: '0',
    };
    return (
      <div className="input-group add-friend">
        <input
          type="text"
          className="form-control"
          style={inputStyle}
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
