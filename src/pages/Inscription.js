import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Inscription = () => {
  const [formData, setFormData] = useState({
    nom_utilisateur: '',
    email: '',
    mot_de_passe: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3003/api/inscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Inscription réussie. Vous pouvez maintenant vous connecter.');
        // Rediriger vers la page de connexion ou faire d'autres actions après l'inscription
      } else {
        toast.error(data.message || 'Erreur d\'inscription.');
      }
    } catch (error) {
      console.error('Erreur lors de la requête vers le serveur:', error);
      toast.error('Erreur d\'inscription.');
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
        <h1>Inscription</h1>
        <StyledForm onSubmit={handleSubmit}>
          <InputLabel>Nom d'utilisateur</InputLabel>
          <Input
            type="text"
            name="nom_utilisateur"
            value={formData.nom_utilisateur}
            onChange={handleInputChange}
            placeholder="Entrez votre nom d'utilisateur"
          />

          <InputLabel>Email</InputLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Entrez votre adresse e-mail"
          />

          <InputLabel>Mot de passe</InputLabel>
          <Input
            type="password"
            name="mot_de_passe"
            value={formData.mot_de_passe}
            onChange={handleInputChange}
            placeholder="Entrez votre mot de passe"
          />

          <SubmitButton type="submit">S'inscrire</SubmitButton>
        </StyledForm>
      </ContentContainer>
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
  width: 100%;
`;

const ContentContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
  margin: 20px;
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

export default Inscription;
