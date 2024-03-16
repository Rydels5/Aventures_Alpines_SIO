import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Arial', sans-serif;
`;

const BannerLink = styled.a`
  display: block;
  background-image: url('https://img.freepik.com/photos-premium/fond-paysage-montagne-texture-sombre-minimal-fond-ecran-moderne-illustration-banniere-graphique-simple-panorama_78450-2725.jpg');
  background-size: cover;
  background-position: center;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  text-decoration: none;
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

const InteractiveMap = styled.iframe`
  width: 100%;
  height: 400px;
`;

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
`;

const Image = styled.img`
  width: 300px;
  margin-bottom: 20px;
`;

const HikingPage = () => {
  return (
    <Container>
      <Header />
      <BannerLink href="/randonnee">
        <div>
          <BannerTitle>Randonnée</BannerTitle>
          <BannerSubtitle>Découvrez des aventures en pleine nature</BannerSubtitle>
        </div>
      </BannerLink>
      <Content>
        <Title>Randonnée en Montagne</Title>
        <Description>
  <p><strong>Informations spécifiques sur la randonnée en montagne :</strong></p>

  <p><strong>Niveaux de difficulté :</strong><br />
  Les randonnées en montagne peuvent varier en difficulté, allant de facile à extrême. Il est important de choisir un sentier adapté à votre niveau de condition physique et d'expérience en randonnée.</p>

  <p><strong>Équipement recommandé :</strong><br />
  Pour une randonnée en montagne, il est essentiel de porter des chaussures de randonnée robustes, confortables et adaptées au terrain. De plus, il est recommandé d'avoir un sac à dos avec de l'eau, des collations, une trousse de premiers soins, une lampe de poche, une carte et une boussole.</p>

  <p><strong>Meilleures saisons :</strong><br />
  Les meilleures saisons pour la randonnée en montagne dépendent de la région et de l'altitude. En général, le printemps et l'automne offrent des températures agréables et des paysages magnifiques. En été, les températures peuvent être plus chaudes, tandis que l'hiver peut apporter de la neige et des conditions glacées sur les sentiers.</p>
</Description>

        <SectionTitle>Carte interactive des sentiers de randonnée :</SectionTitle>
        <Info>
          Voici une carte interactive affichant les sentiers de randonnée populaires avec des points d'intérêt :
        </Info>
        <InteractiveMap
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509887.584879692!2d2.1246599043593677!3d46.36551890645868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c425d5c11b9e5%3A0xa9a5895bc4132d!2sMont%20Blanc!5e0!3m2!1sen!2sfr!4v1646870249952!5m2!1sen!2sfr"
          allowfullscreen=""
          loading="lazy"
        ></InteractiveMap>
        <SectionTitle>Galerie de photos de randonnées passées :</SectionTitle>
        <Gallery>
          <Image src="https://example.com/hiking1.jpg" alt="Randonnée 1" />
          <Image src="https://example.com/hiking2.jpg" alt="Randonnée 2" />
          <Image src="https://example.com/hiking3.jpg" alt="Randonnée 3" />
          {/* Ajoutez plus d'images selon vos besoins */}
        </Gallery>
      </Content>
      <Footer />
    </Container>
  );
}

export default HikingPage;
