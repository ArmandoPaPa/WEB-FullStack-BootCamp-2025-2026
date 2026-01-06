const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/movieApp')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

 // const db = mongoose.connection;
 // db.on('error', console.error.bind(console, 'connection error:'));
 // db.once('open', function() {
 //     console.log("We're connected!");
 // });

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String,
});

const Movie = mongoose.model('Movie', movieSchema);

// const amadeus = new Movie({ title: 'Amadeus', year: 1984, score: 9.2, rating: 'R' });
// amadeus.save();

// Movie.insertMany([
//     { title: 'The Shawshank Redemption', year: 1994, score: 9.3, rating: 'R' },
//     { title: 'The Godfather', year: 1972, score: 9.2, rating: 'R' },
//     { title: 'The Dark Knight', year: 2008, score: 9.0, rating: 'PG-13' },
//     { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//     { title: 'Toy Story', year: 1995, score: 8.3, rating: 'G' },
//     { title: 'Alien', year: 1979, score: 8.5, rating: 'R' },
//     { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
//     { title: 'Stand by Me', year: 1986, score: 8.1, rating: 'R' },
//     { title: 'Moonrise Kingdom', year: 2012, score: 7.8, rating: 'PG-13' },
//     { title: 'The Incredibles', year: 2004, score: 8.0, rating: 'PG' },
// ])
// .then(data => {
//     console.log("Movies inserted:", data);
// })
// .catch(err => {
//     console.log("Error inserting movies:", err);
// });

