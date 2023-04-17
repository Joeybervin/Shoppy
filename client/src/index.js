import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App/App';
/* LIBRAIRIES */
/* react router */
import { BrowserRouter } from 'react-router-dom';
/* redux */
import { store, persistor } from './store/store';
import { Provider } from 'react-redux';
/* redux-persist */
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* redux */}
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter> {/* react router */}
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
