import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
      </Routes>
    </>
  );
};

export default App;
