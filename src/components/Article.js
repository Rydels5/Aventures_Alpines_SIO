// Dans le fichier components/Article.js par exemple
import React from 'react';

const Article = ({ title, content, date, author }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>Date de publication: {date}</p>
      <p>Auteur: {author}</p>
    </div>
  );
};

export default Article;
