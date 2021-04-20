const mongoose = require('mongoose')
const Schema = mongoose.Schema

// {
//     date: now,
//     offset: now.getTimezoneOffset()
// }

const opts = {
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
    timestamps: {
        currentTime: () => {
            var now = new Date();
            var newTime = new Date(now.getTime() + (7 * 3600 * 1000))
            return newTime;
        }
    },
};

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, opts)

const Blog = mongoose.model('blogs', blogSchema)

module.exports = Blog