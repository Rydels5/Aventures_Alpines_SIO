import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blog = () => {
  const [blogArticles, setBlogArticles] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorEmail, setAuthorEmail] = useState('');

  const fetchArticles = async () => {
    try {
      const response = await fetch('http://localhost:3003/api/articles');
      const data = await response.json();
      setBlogArticles(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des articles:', error);
    }
  };

  const submitArticle = async () => {
    try {
      const response = await fetch('http://localhost:3003/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          titre: title,
          contenu: content,
          nom: authorName,
          email: authorEmail
        }),
      });

      if (response.status === 201) {
        console.log('Article ajouté avec succès');
        fetchArticles();
        toast.success('Article ajouté avec succès !', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        const errorMessage = await response.text();
        console.error('Erreur lors de l\'ajout de l\'article:', errorMessage);
        toast.error('Erreur lors de l\'ajout de l\'article.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error('Erreur lors de la soumission de l\'article:', error);
      toast.error('Erreur lors de la soumission de l\'article.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const fadeInAnimation = useAnimation();

  useEffect(() => {
    fadeInAnimation.start({ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } });
  }, [fadeInAnimation]);

  return (
    <Container animate={fadeInAnimation}>
      <Header />

      <Banner>
        <Title>Blog</Title>
      </Banner>

      <AddArticleSection>
        <h2>Ajouter un nouvel article</h2>
        <InputLabel>
          Titre: <InputField type="text" onChange={(e) => setTitle(e.target.value)} />
        </InputLabel>
        <InputLabel>
          Contenu: <TextareaField onChange={(e) => setContent(e.target.value)} />
        </InputLabel>
        <InputLabel>
          Nom de l'auteur: <InputField type="text" onChange={(e) => setAuthorName(e.target.value)} />
        </InputLabel>
        <InputLabel>
          Email de l'auteur: <InputField type="email" onChange={(e) => setAuthorEmail(e.target.value)} />
        </InputLabel>
        <SubmitButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={submitArticle}
        >
          Publier l'article
        </SubmitButton>
      </AddArticleSection>

      <ArticleListSection>
        <h2>Liste des articles</h2>
        {blogArticles.map((article) => (
          <ArticleCard
            key={article.id}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <ArticleTitle>{article.titre}</ArticleTitle>
            <ArticleContent>{article.contenu}</ArticleContent>
            <LikeDislikeSection>
              <LikeButton>J'aime</LikeButton>
              <DislikeButton>Je n'aime pas</DislikeButton>
              <LikesCount>{article.likes} J'aime</LikesCount>
              <DislikesCount>{article.dislikes} Je n'aime pas</DislikesCount>
            </LikeDislikeSection>
            <ArticleDate>Date de publication: {article.date_publication}</ArticleDate>
          </ArticleCard>
        ))}
      </ArticleListSection>

      <Footer />

      <ToastContainer />
    </Container>
  );
};

const Container = styled(motion.div)`
  font-family: 'Arial', sans-serif;
  text-align: center;
  margin: 0 auto;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

const Banner = styled.div`
  background: linear-gradient(90deg, #880e4f 0%, #3f51b5 100%);
  color: white;
  padding: 20px;
  border-radius: 10px 10px 0 0;
`;

const Title = styled.h1`
  color: #fff;
`;

const AddArticleSection = styled.div`
  margin-top: 30px;

  h2 {
    font-size: 1.8em;
    margin-bottom: 20px;
    color: #009900;
  }
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
  color: #333;
`;

const InputField = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const TextareaField = styled.textarea`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const SubmitButton = styled.button`
  background-color: #009900;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ArticleListSection = styled.div`
  margin-top: 50px;

  h2 {
    font-size: 1.8em;
    margin-bottom: 20px;
    color: #009900;
  }
`;

const ArticleCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  text-align: left;

  h3 {
    color: #333;
    margin-bottom: 10px;
    font-size: 1.6em;
  }

  p {
    color: #555;
    margin-bottom: 10px;
  }
`;

const ArticleTitle = styled.h3`
  color: #333;
  margin-bottom: 10px;
  font-size: 1.6em;
`;

const ArticleContent = styled.p`
  color: #555;
  margin-bottom: 10px;
`;

const LikeDislikeSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const LikeButton = styled.button`
  background-color: #4caf50;
  color: white;
  font-size: 14px;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const DislikeButton = styled.button`
  background-color: #f44336;
  color: white;
  font-size: 14px;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const LikesCount = styled.span`
  color: #4caf50;
  font-size: 14px;
`;

const DislikesCount = styled.span`
  color: #f44336;
  font-size: 14px;
`;

const ArticleDate = styled.p`
  color: #777;
`;

export default Blog;
