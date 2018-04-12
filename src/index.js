import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import AppRouter from './routers/AppRouter';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppRouter />, document.getElementById('root'));

registerServiceWorker();
