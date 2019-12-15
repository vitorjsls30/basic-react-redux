import React from 'react';
import Sidebar from './components/Sidebar';
import Video from './components/Video';

import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);
console.log(store.getState());
function App() {
  return (
    <div>
      <Provider store={store}>
        <Video />
        <Sidebar />
      </Provider>
    </div>
  );
}

export default App;
