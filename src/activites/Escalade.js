import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import YouTube from 'react-youtube'; // Assurez-vous d'avoir installé react-youtube

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

const VideoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const ClimbingPage = () => {
  return (
    <Container>
      <Header />
      <BannerLink href="/activites">
        <div>
          <BannerTitle>Escalade</BannerTitle>
          <BannerSubtitle>Découvrez des aventures extraordinaires dans les plus belles régions montagneuses du monde</BannerSubtitle>
        </div>
      </BannerLink>
      <Content>
        <Title>Escalade en Montagne</Title>
        <Description>
          L'escalade en montagne offre une aventure palpitante au cœur de paysages vertigineux. Explorez des voies de différents niveaux de difficulté, découvrez les équipements essentiels et choisissez la meilleure saison pour votre expédition.
        </Description>
        <SectionTitle>Conseils de sécurité et astuces pour les débutants :</SectionTitle>
        <Info>
          - Toujours vérifier l'équipement avant de grimper.
          - Commencez par des voies faciles et progressez lentement.
          - Apprenez à utiliser correctement le matériel de sécurité.
        </Info>
        <SectionTitle>Liste des sites d'escalade renommés :</SectionTitle>
        <Info>
          - Mont Blanc, France (Difficulté: Expert)
          - Yosemite, USA (Difficulté: Intermédiaire)
          - Kalymnos, Grèce (Difficulté: Débutant à Intermédiaire)
        </Info>
        <SectionTitle>Vidéos de grimpeurs expérimentés :</SectionTitle>
        <VideoContainer>
          <YouTube videoId="oSdiN8fO3go" />
          <YouTube videoId="uY_dX7FAz2M" />
        </VideoContainer>
      </Content>
      <Footer />
    </Container>
  );
}

export default ClimbingPage;
