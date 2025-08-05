// App.js
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepage from './Pages/Homepage';
import CoinPage from './Pages/CoinPage';
import { Box } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          backgroundColor: '#14161a',
          color: 'white',
          minHeight: '100vh',
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
