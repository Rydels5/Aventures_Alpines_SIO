import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <motion.header
      style={{
        textAlign: 'center',
        padding: '20px',
        background: '#1E90FF', // Nouvelle couleur de fond
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)', // Nouvelle ombre
      }}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav>
        <ul
          style={{
            listStyleType: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            justifyContent: 'space-around', // Nouvelle disposition
            alignItems: 'center', // Centrer verticalement les éléments
          }}
        >
          <NavItem to="/">Accueil</NavItem>
          <NavItem to="/Randonnee">Randonnée</NavItem>
          <NavItem to="/Ski">Ski</NavItem>
          <NavItem to="/Parapente">Parapente</NavItem>
          <NavItem to="/Escalade">Escalade</NavItem>
          <NavItem to="/Rafting">Rafting</NavItem>
          <NavItem to="/Alpinisme">Alpinisme</NavItem>
          <NavItem to="/Contact">Contact</NavItem>
          <NavItem to="/Activites">Activités</NavItem>
          <NavItem to="/Connexion">Connexion</NavItem>
          <NavItem to="/Inscription">Inscription</NavItem>
        </ul>
      </nav>
    </motion.header>
  );
};

const NavItem = ({ to, children }) => {
  return (
    <motion.li
      style={{
        fontSize: '20px', // Nouvelle taille de police
        fontWeight: 'bold',
        color: '#fff', // Nouvelle couleur du texte
      }}
      whileHover={{ scale: 1.1, color: '#ffeb3b' }} // Nouvelle animation au survol
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to={to} style={{ textDecoration: 'none', color: '#fff' }}>
        {children}
      </Link>
    </motion.li>
  );
};

export default Header;
