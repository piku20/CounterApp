import {} from 'react-native';

import Counter from "./src/counter";
import { Provider } from 'react-redux';
import React from "react";
import store from './src/store';

const App = ()=>{
  return(
    <Provider store={store}>
      <Counter/>
    </Provider>    
  );
}

export default App;