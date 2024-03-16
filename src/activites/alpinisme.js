import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

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

const Warning = styled.div`
  background-color: #ff6961;
  color: white;
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;
`;

const MountaineeringPage = () => {
  return (
    <Container>
      <Header />
      <BannerLink href="/alpinisme">
        <div>
          <BannerTitle>Alpinisme</BannerTitle>
          <BannerSubtitle>Explorez les sommets les plus élevés du monde</BannerSubtitle>
        </div>
      </BannerLink>
      <Content>
        <Title>Alpinisme en Montagne</Title>
        <Description>
          Informations spécifiques sur l'alpinisme en montagne : niveaux de difficulté, équipement recommandé, meilleures saisons, etc.
        </Description>
        <SectionTitle>Carte interactive des itinéraires d'alpinisme :</SectionTitle>
        <Info>
          Voici une carte interactive affichant les itinéraires d'alpinisme populaires avec des points de départ et des sommets :
        </Info>
        <InteractiveMap
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509887.584879692!2d2.1246599043593677!3d46.36551890645868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c425d5c11b9e5%3A0xa9a5895bc4132d!2sMont%20Blanc!5e0!3m2!1sen!2sfr!4v1646870249952!5m2!1sen!2sfr"
          allowfullscreen=""
          loading="lazy"
        ></InteractiveMap>
        <SectionTitle>Vidéo d'alpinisme :</SectionTitle>
        <ReactPlayer
          url="https://vimeo.com/256927902"
          controls
          width="100%"
          height="400px"
        />
        <Warning>
          <p><strong>Attention :</strong> L'alpinisme est une activité extrême avec des risques significatifs. Assurez-vous d'être correctement formé, équipé et accompagné avant de vous aventurer sur les sommets. Les conditions météorologiques et les dangers naturels peuvent changer rapidement en montagne. Respectez toujours les règles de sécurité et n'hésitez pas à faire appel à des guides expérimentés.</p>
        </Warning>
      </Content>
      <Footer />
    </Container>
  );
}

export default MountaineeringPage;
