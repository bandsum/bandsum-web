import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './style/globalStyle';
import Splash from './pages/Splash';
import EnsembleRoomAroundMe from './pages/EnsembleRoomAroundMe';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/splash" element={<Splash />} />
        <Route path="/main" element={<EnsembleRoomAroundMe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
