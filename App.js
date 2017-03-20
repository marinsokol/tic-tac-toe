import React from 'react';
import Rx from 'rxjs/Rx';
import createRecycle from 'recyclejs';
import reactDriver from 'recyclejs/drivers/react';
import Root from './src/Root';

// creating recycle instance
const recycle = createRecycle(Rx);
// applying drivers
recycle.use(reactDriver(React));

// view
const AppReact = recycle.createReactComponent(Root);

export default AppReact;
