const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

const movies = [
	{
		id: 0,
		boxart: 'https://images-na.ssl-images-amazon.com/images/I/81L7gpjeXWL._SL1500_.jpg',
		title: 'The Godfather',
		director: 'Francis Ford Coppola',
		metascore: 100,
		stars: ['Marlon Brando', 'Al Pacino', 'Robert Duvall'],
	},
	{
		id: 1,
		boxart: 'http://i.imgur.com/A7oz1B4.jpg',
		title: 'Star Wars',
		director: 'George Lucas',
		metascore: 92,
		stars: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
	},
	{
		id: 2,
		boxart: 'https://www.visionvideo.com/img/product/large/L99942D.jpg',
		title: 'The Lord of the Rings: The Fellowship of the Ring',
		director: 'Peter Jackson',
		metascore: 92,
		stars: ['Elijah Wood', 'Ian McKellen', 'Orlando Bloom'],
	},
	{
		id: 3,
		boxart: 'https://oldies-cdn.freetls.fastly.net/i/boxart/w340/21/97/031398219729.jpg',
		title: 'Terminator 2: Judgement Day',
		director: 'James Cameron',
		metascore: 94,
		stars: ['Arnold Schwarzenegger', 'Edward Furlong', 'Linda Hamilton'],
	},
	{
		id: 4,
		boxart: 'https://oldies-cdn.freetls.fastly.net/i/boxart/w255/82/72/794043827228.jpg?',
		title: 'Dumb and Dumber',
		director: 'The Farely Brothers',
		metascore: 76,
		stars: ['Jim Carrey', 'Jeff Daniels', 'Lauren Holly'],
	},
	{
		id: 5,
		boxart: 'https://images-na.ssl-images-amazon.com/images/I/51MWAalpG0L.jpg',
		title: 'Tombstone',
		director: 'George P. Cosmatos',
		metascore: 89,
		stars: ['Kurt Russell', 'Bill Paxton', 'Sam Elliot'],
	},
];

app.get('/api/movies', (req, res) => {
	res.send(movies);
});

app.get('/api/movies/:id', (req, res) => {
	const movie = movies.filter(movie => movie.id.toString() === req.params.id)[0];
	res.status(200).json(movie);
});

app.post('/api/movies', (req, res) => {
	if (req.body.id !== undefined) movies.push(req.body);
	res.status(201).json(movies);
});

app.listen(5000, () => {
	console.log('Server listening on port 5000');
});
