import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';
import "normalize.css";
import {OrganizationProvider} from './Components/OrganizationContext/OrganizationContext'
ReactDOM.render(
    <OrganizationProvider>
                <App />
    </OrganizationProvider>, 
    document.getElementById('root'));

serviceWorker.unregister();
