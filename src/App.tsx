import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ChiSiamoPage from './pages/ChiSiamoPage';
import ServiziPage from './pages/ServiziPage';
import GalleriaPage from './pages/GalleriaPage';
import ContattiPage from './pages/ContattiPage';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chi-siamo" element={<ChiSiamoPage />} />
          <Route path="/servizi" element={<ServiziPage />} />
          <Route path="/galleria" element={<GalleriaPage />} />
          <Route path="/contatti" element={<ContattiPage />} />
        </Routes>
      </Layout>
      <WhatsAppButton />
    </Router>
  );
}

export default App;
