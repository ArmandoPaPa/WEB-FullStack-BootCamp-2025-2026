const mongoose = require('mongoose');
const {Schema} = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshipDemo')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

const userSchema = new Schema({
    username: String,
    age: Number
});

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

const makeTweets = async () => {
    const user = new User({username: 'gymfan', age: 30});
    const tweet1 = new Tweet({text: 'I love deadlifts', likes: 100});
    const tweet2 = new Tweet({text: 'I f*ck up my legs', likes: 50});
    tweet1.user = user;
    tweet2.user = user;
    await user.save();
    await tweet1.save();
    await tweet2.save();
};

// makeTweets();

const findTweet = async () => {
    // const t = await Tweet.findOne({}).populate('user', 'username');
    const t = await Tweet.find({}).populate('user');
    console.log(t);
};

// findTweet();


// Tweet.findOne({text: 'I love deadlifts'})
//     .populate('user')
//     .then(tweet => console.log(tweet));
