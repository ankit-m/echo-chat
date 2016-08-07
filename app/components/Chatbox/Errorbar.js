import React from 'react';

const errorStyle = {
  position: 'absolute',
  bottom: '0',
  height: '50px',
  width: 'calc(100% - 250px)',
  lineHeight: '50px',
  textIndent: '20px',
  color: 'maroon',
};

const Errorbar = () => (
  <div className="bg-danger" style={errorStyle}>
    <span className="glyphicon glyphicon-exclamation-sign" />
    &nbsp;Error in connection. You can view past messages.
  </div>
);

export default Errorbar;
