import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import Counter from './features/counter/Counter';
import Score from './features/counter/Score';

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <Score />
    </Provider>
    
  );
}

export default App;
