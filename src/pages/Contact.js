import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: '',
    accepteCharte: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.accepteCharte) {
      alert('Veuillez accepter la charte avant d\'envoyer le message.');
      return;
    }

    setFormData({
      nom: '',
      email: '',
      message: '',
      accepteCharte: false,
    });
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  return (
    <Container>
      <Header />

      <FormSection
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <FormTitle>Contactez-nous</FormTitle>
        <StyledForm onSubmit={handleSubmit}>
          <InputLabel>Nom</InputLabel>
          <Input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleInputChange}
            required
          />

          <InputLabel>Email</InputLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <InputLabel>Message</InputLabel>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />

          {/* Nouvelle checkbox animée */}
          <CheckboxContainer>
            <input
              type="checkbox"
              id="cbx"
              className="hidden-xs-up"
              name="accepteCharte"
              checked={formData.accepteCharte}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="cbx" className="cbx"></label>
            <CheckboxLabel htmlFor="cbx" className="lbl">
              J'accepte la charte
            </CheckboxLabel>
          </CheckboxContainer>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <SubmitButton type="submit">Envoyer</SubmitButton>
          </motion.div>
        </StyledForm>
      </FormSection>

      <Footer />
    </Container>
  );
};

const CheckboxContainer = styled.div`
  position: relative;
`;

const CheckboxLabel = styled.label`
  margin-left: 5px;
  vertical-align: middle;
  cursor: pointer;
  color: #333;
`;

const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  background-color: #f7f7f7;
  color: #333;
  overflow-x: hidden;
`;

const FormSection = styled(motion.section)`
  margin-top: 60px;
  padding: 40px 20px;
`;

const FormTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  font-weight: bold;
  color: #333;
`;

const StyledForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

const InputLabel = styled.label`
  display: block;
  font-size: 1.2em;
  margin-bottom: 10px;
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  background-color: #0066cc;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2em;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0050a0;
  }
`;

export default Contact;
