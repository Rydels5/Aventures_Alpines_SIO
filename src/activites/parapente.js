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
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SectionTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
  width: 100%;
`;

const MapWrapper = styled.div`
  width: 60%;
  height: 500px;
`;

const InteractiveMap = styled.iframe`
  width: 100%;
  height: 100%;
`;

const Gallery = styled.div`
  width: 35%;
`;

const Photo = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;

const TextSection = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

const TextTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const TextContent = styled.p`
  font-size: 1.1em;
`;

const HomePage = () => {
  return (
    <Container>
      <Header />
      <BannerLink href="/activites">
        <div>
          <BannerTitle>Parapente</BannerTitle>
          <BannerSubtitle>Découvrez la liberté de voler au-dessus des paysages magnifiques en parapente</BannerSubtitle>
        </div>
      </BannerLink>
      <Content>
        <MapWrapper>
          <InteractiveMap
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509887.584879692!2d2.1246599043593677!3d46.36551890645868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c425d5c11b9e5%3A0xa9a5895bc4132d!2sMont%20Blanc!5e0!3m2!1sen!2sfr!4v1646870249952!5m2!1sen!2sfr"
            allowfullscreen=""
            loading="lazy"
          ></InteractiveMap>
        </MapWrapper>
        <Gallery>
          <TextSection>
            <SectionTitle>Présentation du Parapente</SectionTitle>
            <TextContent>
              Le parapente est une activité aérienne passionnante qui permet aux amateurs de voler au-dessus de magnifiques paysages en utilisant une voile spécialement conçue. Que ce soit pour une expérience calme et tranquille ou pour des sensations fortes, le parapente offre une liberté incomparable dans les airs.
            </TextContent>
          </TextSection>
          <TextSection>
            <SectionTitle>Photos Clients</SectionTitle>
            <Photo src="https://www.aeroslide.com/wp-content/uploads/2021/01/parapente-annecy-decouverte.webp" alt="Photo 1" />
            <Photo src="https://www.falkenair.com/wp-content/uploads/2023/12/52207286616_43134a2e38_o-1024x768.jpg" alt="Photo 2" />
            <Photo src="https://cdn.getyourguide.com/img/tour/641d68fa7f37e.jpeg/145.jpg" alt="Photo 3" />
          </TextSection>
        </Gallery>
      </Content>
      <Footer />
    </Container>
  );
}

export default HomePage;
