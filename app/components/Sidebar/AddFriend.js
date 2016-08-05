import React from 'react';

class AddFriend extends React.Component {
  constructor() {
    super();
    this.addFriend = this.addFriend.bind(this);
  }
  addFriend() {
    this.props.handler(this.name.value);
    this.name.value = '';
  }
  render() {
    return (
      <div className="input-group" style={{ position: 'absolute ', bottom: '0', width: '240px' }}>
        <input type="textarea" className="form-control" ref={(ref) => this.name = ref} />
        <span className="input-group-btn">
          <button className="btn btn-danger" onClick={this.addFriend} type="button">Add</button>
        </span>
      </div>
    );
  }
}

AddFriend.propTypes = {
  handler: React.PropTypes.func.isRequired,
};

export default AddFriend;
