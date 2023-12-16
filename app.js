const express = require('express');
const app = express();
const port = 4000;
const path = require('path');

const jsonData = require('./fichier.json');

// Définir un point de terminaison pour l'API
app.get('/api/lieux/:localisation', (req, res) => {
    // Récupérer la localisation depuis les paramètres de l'URL
    const localisationDemandee = req.params.localisation;

    // Filtrer les données pour celles situées dans la localisation demandée
    const lieuxFiltres = jsonData.filter(item => {
        return item.localisation.toLowerCase() === localisationDemandee.toLowerCase();
        // Vous devrez peut-être ajuster la logique de filtrage en fonction de la structure réelle de vos données JSON
    });

    // Renvoyer les données filtrées en tant que réponse JSON
    res.json(lieuxFiltres);
});
app.use('/static', express.static(path.join(__dirname, 'pages')));

// Endpoint pour rendre la page HTML
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'pages', 'index.html');
  res.sendFile(indexPath);
});
app.listen(port, () => console.log(`Démarré sur : http://localhost:${port}`));