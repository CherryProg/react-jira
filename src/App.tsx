import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ProjectListScreen} from './screens/project-list'
import {TsReactTest} from 'try-use-array'
import {LoginScreen} from 'login/index'

function App() {
  return (
    <div className="App">
      {/* <TsReactTest/>  */}
      {/* <ProjectListScreen/> */}
      <LoginScreen/>
    </div> 
  );
}

export default App;
