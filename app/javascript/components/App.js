import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';
import Home from './Home';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/messages" element={<Greeting />} />
  </Routes>
);

export default App;