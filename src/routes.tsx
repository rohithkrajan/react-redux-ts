import * as React from 'react';
import { Route,IndexRoute } from 'react-router';

import App from './App';
import MerchantIndex from './components/MerchantsIndex';

export default (
    <Route path="/" component={App}>
      <IndexRoute component={MerchantIndex}/>
    </Route>
)