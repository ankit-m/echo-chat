import React from 'react';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: window.navigator.onLine ? 'online' : 'offline' };
    this.handleOnline = this.handleOnline.bind(this);
    this.handleOffline = this.handleOffline.bind(this);
    window.addEventListener('offline', this.handleOffline);
    window.addEventListener('online', this.handleOnline);
  }
  handleOnline() {
    this.setState({ status: 'online' });
  }
  handleOffline() {
    this.setState({ status: 'offline' });
  }
  render() {
    return (
      <div className="media sidebar-title">
        <div className="media-left">
          <img className="media-object img-circle" width="40px" height="40px" src="http://lorempixel.com/200/200/" alt="..." />
        </div>
        <div className="media-body">
          <h5 className="media-heading" style={{ margin: '5px 0 0 0' }}>
            <b>{this.props.name}</b>
          </h5>
          <small className={this.state.status === 'online' ? 'text-muted' : 'text-danger'}>
            {this.state.status}
          </small>
        </div>
      </div>
    );
  }
}

Title.propTypes = {
  name: React.PropTypes.string.isRequired,
};

export default Title;
