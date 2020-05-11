import React from 'react';
import './App.css';
import store from './store'
// 引入Boy和Girl两个组件
import Boy from './component/Boy.jsx'
import Girl from './component/Girl.jsx'

import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className='boy'>
          <Boy />
        </div>
        <div className='girl'>
          <Girl />
        </div>
      </div>
    </Provider>
  );
}

export default App;
