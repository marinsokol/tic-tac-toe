import React from 'react';
import Rx from 'rxjs/Rx';
import createRecycle from 'recyclejs/react';
import Root from './src/Root';

const Recycle = createRecycle(React, Rx);

export default class App extends React.Component {
  render() {
    return (
      <Recycle root={Root} />
    );
  }
}