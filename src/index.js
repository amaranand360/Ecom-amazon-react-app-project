import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { StateProvider } from './Components/StateProvider';
import reducer,{ initialState } from './Components/reducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
);

