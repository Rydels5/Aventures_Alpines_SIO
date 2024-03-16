import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

// Styled components for the homepage layout
const Container = styled.div`
  font-family: 'Arial', sans-serif;
`;

const BannerLink = styled.a`
  display: block;
  background-image: url('https://img.freepik.com/photos-premium/fond-paysage-montagne-texture-sombre-minimal-fond-ecran-moderne-illustration-banniere-graphique-simple-panorama_78450-2725.jpg'); /* Remplacez l'URL par le lien de votre bannière */
  background-size: cover;
  background-position: center;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  text-decoration: none; /* Supprime le soulignement du lien */
`;

const BannerTitle = styled.h1`
  font-size: 3em;
  margin-bottom: 20px;
`;

const BannerSubtitle = styled.p`
  font-size: 1.5em;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: justify;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2em;
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8em;
  margin-bottom: 10px;
`;

const Info = styled.p`
  font-size: 1.1em;
  margin-bottom: 20px;
`;

const TestimonialsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
`;

const Testimonial = styled.div`
  width: 300px;
  margin-bottom: 20px;
`;

const TestimonialText = styled.p`
  font-style: italic;
`;

const HomePage = () => {
  return (
    <Container>
      <Header />
      <BannerLink href="/activites">
        <div>
          <BannerTitle>Ski</BannerTitle>
          <BannerSubtitle>Découvrez des aventures extraordinaires dans les plus belles régions montagneuses du monde</BannerSubtitle>
        </div>
      </BannerLink>
      <Content>
        <Title>Ski en Montagne</Title>
        <Description>
          Présentation des différentes disciplines de ski en montagne : ski alpin, ski de fond, ski hors-piste, etc.
        </Description>
        <SectionTitle>Conditions d'enneigement en temps réel :</SectionTitle>
        <Info>
          Obtenez les dernières informations sur les conditions d'enneigement pour les stations de ski partenaires.
        </Info>
        <SectionTitle>Témoignages de skieurs passionnés :</SectionTitle>
        <TestimonialsContainer>
          <Testimonial>
            <TestimonialText>"Le ski en montagne est une expérience incomparable. J'ai passé des moments inoubliables sur les pistes enneigées."</TestimonialText>
          </Testimonial>
          <Testimonial>
            <TestimonialText>"Les montagnes offrent tellement de possibilités de ski, que vous soyez débutant ou expert. C'est un monde à découvrir!"</TestimonialText>
          </Testimonial>
        </TestimonialsContainer>
      </Content>
      <Footer />
    </Container>
  );
}

export default HomePage;
