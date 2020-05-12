import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Index from './components/index'

function App() {
  return (
    <Router basename='/996'>
        <Route component={Index}/>
    </Router>
  );
}

export default App;
