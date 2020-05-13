import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import Index from './components/index'

function App() {
  return (
    <Router>
        <Route component={Index}/>
    </Router>
  );
}

export default App;
