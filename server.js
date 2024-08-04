const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000; // Choose your port

// Connect to MongoDB 
mongoose.connect('mongodb://localhost:27017/your-database-name', { // Replace with your MongoDB URI
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Create a News Article Schema (MongoDB)
const newsArticleSchema = new mongoose.Schema({
    title: String,
    content: String,
    imageUrl: String
});

const NewsArticle = mongoose.model('NewsArticle', newsArticleSchema); 

app.use(bodyParser.json()); 

// Route to get news articles (for AJAX request)
app.get('/api/news', (req, res) => {
    NewsArticle.find({}, (err, articles) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(articles);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});