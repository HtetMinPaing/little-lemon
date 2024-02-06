import './App.css';
import About from './components/About';
import Bottom from './components/Bottom';
import Hero from './components/Hero';
import Highlight from './components/Highlight';
import Navigation from './components/Navigation';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Highlight />
      <Testimonials />
      <About />
      <Bottom />
    </div>
  );
}

export default App;
