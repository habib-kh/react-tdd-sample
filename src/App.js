import React from 'react';
import Header from './components/header/header';

import './App.scss';
import Headline from './components/headline/headline';
import { Provider } from 'react-redux';
import store from './store/createStore';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        <div className='main'>
          <Headline header={1} desc='click the button to see the post' />
        </div>
      </div>
    </Provider>
  );
}

export default App;
