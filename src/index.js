import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FirebaseContext } from './store/FirebaseContext';
import Context from './store/FirebaseContext';
import firebase from './Firebase/config'
import 'firebase/auth'


ReactDOM.createRoot(document.getElementById('root')).render(

<FirebaseContext.Provider value={{firebase}}>
    <Context>
        <App />
    </Context>
</FirebaseContext.Provider>);
