const express = require('express');
const projects = require('./public/js/data');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
const PORT = process.env.PORT || 3000;
const technologies = ['HTML5', 'CSS3', 'SASS', 'Bootstrap', 'Javascript', 'Angular', 'React', 'Node', 'Express', 'MongoDB'];
app.get('/', (req, res) => {
    res.render('home', {technologies, projects})
})

app.listen(PORT, () => {
    console.log("Server is up and running");
});