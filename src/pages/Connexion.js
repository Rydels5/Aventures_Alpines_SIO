import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Connexion = () => {
  const [formData, setFormData] = useState({
    nom_utilisateur: '',
    mot_de_passe: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3003/api/connexion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success && data.nom_utilisateur && data.id) {
        toast.success(`Connexion réussie en tant que ${data.nom_utilisateur}`);
        // Rediriger vers la page Blog si les identifiants sont corrects
        window.location.href = `/blog?userId=${data.id}&username=${data.nom_utilisateur}`;
      } else {
        toast.error(data.message || 'Erreur de connexion.');
      }
    } catch (error) {
      console.error('Erreur lors de la requête vers le serveur:', error);
      toast.error('Erreur de connexion.');
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Container>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <ContentContainer>
        <h1>Connexion</h1>
        <StyledForm onSubmit={handleSubmit}>
          <InputLabel>Nom d'utilisateur</InputLabel>
          <Input
            type="text"
            name="nom_utilisateur"
            value={formData.nom_utilisateur}
            onChange={handleInputChange}
            placeholder="Entrez votre nom d'utilisateur"
          />

          <InputLabel>Mot de passe</InputLabel>
          <Input
            type="password"
            name="mot_de_passe"
            value={formData.mot_de_passe}
            onChange={handleInputChange}
            placeholder="Entrez votre mot de passe"
          />

          <SubmitButton type="submit">Se connecter</SubmitButton>
        </StyledForm>
      </ContentContainer>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  background-color: #f7f7f7;
`;

const HeaderContainer = styled.div`
  width: 100%; /* Permet au header de prendre toute la largeur */
`;

const ContentContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
  margin: 20px auto; /* Centre le contenu horizontalement */
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

export default Connexion;
