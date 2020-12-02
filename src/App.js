import React from 'react';
import Header from './components/header/header';

import './App.scss';
import Headline from './components/headline/headline';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='main'>
        <Headline header='posts' desc='click the button to see the post' />
      </div>
    </div>
  );
}

export default App;
