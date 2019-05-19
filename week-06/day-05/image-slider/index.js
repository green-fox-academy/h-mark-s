'use strict';

const express = require('express');
const app = express();
const port = 7890;
app.set('view engine', 'ejs');
app.use('/static', express.static('static'));

const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg']

app.get('/', (req, res) => {
	res.render('home', {
		images: images,
	});
});

app.listen(port, () => {
	console.log(`Listening on port ${port}!`);
});

