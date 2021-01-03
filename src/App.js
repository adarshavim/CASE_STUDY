import React from "react";
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomeComponent from './components/HomeComponent'


function App() {
  return (
    <Provider store={store}>
        <div>
          <HomeComponent />
        </div>
    </Provider>
  );
}

export default App;
