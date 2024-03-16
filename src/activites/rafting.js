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
          <BannerTitle>Rafting</BannerTitle>
          <BannerSubtitle>Explorez les eaux vives et ressentez l'excitation du rafting dans les plus beaux paysages naturels</BannerSubtitle>
        </div>
      </BannerLink>
      <Content>
        <Title>Rafting en Eaux Vives</Title>
        <Description>
          Découvrez l'aventure du rafting en explorant des rivières tumultueuses et en ressentant l'adrénaline de descendre les rapides.
        </Description>
        <SectionTitle>Destinations de Rafting :</SectionTitle>
        <Info>
          Explorez nos destinations de rafting à travers le monde, des eaux tranquilles aux rapides les plus extrêmes :
          <ul>
            <li>Rivière Colorado, États-Unis - Niveau de difficulté : 3-5</li>
            <li>Rivière Zambezi, Zambie/Zimbabwe - Niveau de difficulté : 4-5</li>
            <li>Rivière Futaleufú, Chili - Niveau de difficulté : 4-5</li>
          </ul>
        </Info>
        <SectionTitle>Témoignages de passionnés de rafting :</SectionTitle>
        <TestimonialsContainer>
          <Testimonial>
            <TestimonialText>"Le rafting m'a procuré des sensations fortes et des moments de pur plaisir. Une activité à vivre au moins une fois dans sa vie!"</TestimonialText>
          </Testimonial>
          <Testimonial>
            <TestimonialText>"Naviguer à travers les rapides en rafting m'a permis de me sentir connecté avec la nature de façon unique. Une expérience à couper le souffle!"</TestimonialText>
          </Testimonial>
          <Testimonial>
            <TestimonialText>"Le rafting est une aventure palpitante qui m'a permis de surmonter mes peurs et de me sentir vivant comme jamais auparavant!"</TestimonialText>
          </Testimonial>
          <Testimonial>
            <TestimonialText>"Rien ne vaut l'excitation et la camaraderie ressenties lors d'une descente en rafting. Une expérience inoubliable à partager avec des amis!"</TestimonialText>
          </Testimonial>
        </TestimonialsContainer>
      </Content>
      <Footer />
    </Container>
  );
}

export default HomePage;
