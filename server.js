const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const MySQLStore = require('express-mysql-session')(session);
const app = express();
const PORT = 3003;

app.use(cors());
app.use(bodyParser.json());

const generateSecretKey = () => {
  return crypto.randomBytes(32).toString('hex');
};

app.use(
  session({
    secret: generateSecretKey(),
    resave: false,
    saveUninitialized: true,
  })
);

const sessionStore = new MySQLStore({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'aventures_alpines',
  },
});

app.use(
  session({
    secret: generateSecretKey(),
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
  })
);

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'aventures_alpines',
  },
});

app.post('/api/inscription', async (req, res) => {
  const { nom_utilisateur, email, mot_de_passe } = req.body;

  try {
    const utilisateurExist = await knex('Utilisateurs')
      .where({ nom_utilisateur })
      .orWhere({ email })
      .first();

    if (utilisateurExist) {
      res
        .status(400)
        .json({ success: false, message: 'Nom d\'utilisateur ou email déjà utilisé.' });
    } else {
      const hashedPassword = await bcrypt.hash(mot_de_passe, 10);

      const nouveauUtilisateur = await knex('Utilisateurs').insert({
        nom_utilisateur,
        email,
        mot_de_passe: hashedPassword,
        date_inscription: new Date(),
      });

      res.json({ success: true, message: 'Inscription réussie.' });
    }
  } catch (error) {
    console.error('Erreur lors de l\'inscription:', error);
    res.status(500).json({ success: false, message: 'Erreur lors de l\'inscription.' });
  }
});

app.post('/api/connexion', async (req, res) => {
  const { nom_utilisateur, mot_de_passe } = req.body;

  try {
    const utilisateur = await knex('Utilisateurs').where({ nom_utilisateur }).first();

    if (utilisateur) {
      const motDePasseCorrect = await bcrypt.compare(mot_de_passe, utilisateur.mot_de_passe);

      if (motDePasseCorrect) {
        req.session.user = {
          nom_utilisateur: utilisateur.nom_utilisateur,
          id: utilisateur.id,
        };

        res.json({
          success: true,
          nom_utilisateur: utilisateur.nom_utilisateur,
          id: utilisateur.id,
        });
      } else {
        res
          .status(401)
          .json({ success: false, message: 'Nom d\'utilisateur ou mot de passe incorrect.' });
      }
    } else {
      res
        .status(401)
        .json({ success: false, message: 'Nom d\'utilisateur ou mot de passe incorrect.' });
    }
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    res.status(500).json({ success: false, message: 'Erreur lors de la connexion.' });
  }
});

const checkAuth = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.status(401).json({ success: false, message: 'Accès non autorisé. Connectez-vous d\'abord.' });
  }
};

app.get('/api/articles', async (req, res) => {
  try {
    const articles = await knex('articles_blog').select('*');
    res.json(articles);
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error);
    res.status(500).json({ success: false, message: 'Erreur lors de la récupération des articles.' });
  }
});

app.post('/api/articles', async (req, res) => {
  const { titre, contenu, nom, email } = req.body;

  try {
    let auteurId;

    // Vérifier si l'auteur existe déjà dans la table des auteurs
    const auteurExist = await knex('auteurs').where({ email }).first();

    if (auteurExist) {
      auteurId = auteurExist.auteur_id;
    } else {
      // Si l'auteur n'existe pas, insérer un nouvel auteur dans la table des auteurs
      const [newAuteurId] = await knex('auteurs').insert({ nom, email }).returning('auteur_id');
      auteurId = newAuteurId;
    }

    // Insérer le nouvel article avec l'auteur_id correspondant
    await knex('articles_blog').insert({
      titre,
      contenu,
      date_publication: new Date(),
      auteur_id: auteurId,
      likes: 0,
      dislikes: 0,
    });

    res.status(201).json({ success: true, message: 'Article ajouté avec succès.' });
  } catch (error) {
    console.error('Erreur lors de l\'ajout de l\'article :', error);
    res.status(500).json({ success: false, message: 'Erreur lors de l\'ajout de l\'article.' });
  }
});

app.get('/api/activites', async (req, res) => {
  try {
    const activites = await knex('activites').select('*');
    res.json(activites);
  } catch (error) {
    console.error('Erreur lors de la récupération des activités:', error);
    res
      .status(500)
      .json({ success: false, message: 'Erreur lors de la récupération des activités.' });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur écoutant sur le port ${PORT}`);
});
