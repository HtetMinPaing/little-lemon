import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import BookingPage from './pages/BookingPage';
import OrderOnlinePage from './pages/OrderOnlinePage';
import LoginPage from './pages/LoginPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/menu' element={<MenuPage />} />
          <Route path='/book' element={<BookingPage />} />
          <Route path='/order' element={<OrderOnlinePage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
