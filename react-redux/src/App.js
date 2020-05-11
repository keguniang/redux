import React from 'react';
import store from './store'

// 导入provider组件，利用这个组件包裹我们的结构，从而能够达到统一维护store的效果
import { Provider } from 'react-redux'

import ComA from './pages/ComA'
import ComB from './pages/ComB'

function App() {
  return (
    <Provider store = {store}>
      <div >
        <ComA />
        <hr />
        <ComB />
      </div>
    </Provider>
  );
}

export default App;
