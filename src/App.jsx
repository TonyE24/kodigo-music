


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Formulario from './views/Formulario';
import Inicio from './views/Inicio';
import Musica from './views/Musica';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/music" element={<Musica />} />
          <Route path="/formulario" element={<Formulario />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
