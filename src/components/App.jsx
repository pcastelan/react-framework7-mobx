import React from 'react';
import {
  App,  
  View
} from 'framework7-react';

import routes from '../routes';

export default function (props) {

  
  const f7params = {
    id: 'io.framework7.mobx',
    name: 'Mobx + Framework 7 starter',
    theme: 'auto',
    routes,
  };

  return (
    <App params={f7params}>
  
      <Statusbar />

      <View id="main-view" url="/" main className="ios-edges"/>

    </App>
  );
};
