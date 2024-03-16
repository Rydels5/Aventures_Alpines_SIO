import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Ski from './activites/Ski';
import Blog from './pages/Blog';
import Escalade from './activites/Escalade';
import Parapente from './activites/parapente';
import Randonnee from './activites/Randonnee';
import Rafting from './activites/rafting';
import Alpinisme from './activites/alpinisme';
import Activites from './pages/Activites';
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription';
import Contact from './pages/Contact';



const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ski" element={<Ski />} />
        <Route path="/Randonnee" element={<Randonnee />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Escalade" element={<Escalade />} />
        <Route path="/Parapente" element={<Parapente />} />
        <Route path="/Alpinisme" element={<Alpinisme />} />
        <Route path="/Rafting" element={<Rafting />} />
        <Route path="/Activites" element={<Activites />} />
        <Route path="/Connexion" element={<Connexion />} />
        <Route path="/Inscription" element={<Inscription />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
