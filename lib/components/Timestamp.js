import React, { PureComponent } from 'react';
import storeProvider from './storeProvider';

class Timestamp extends PureComponent {
  static timeDisplay = timestamp =>
    timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'});

  // shouldComponentUpdate(nextProps) {
  //   return this.timeDisplay(this.props.timestamp) !== this.timeDisplay(nextProps.timestamp);
  // }

  render() {
    return (
      <div>
        { this.props.timestampDisplay }
      </div>
    );
  }
}

const extraProps = (store) => {
  return {
    timestampDisplay: Timestamp.timeDisplay(store.getState().timestamp),
  };
};

export default storeProvider(extraProps)(Timestamp);