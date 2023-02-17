module.exports = mongoose => {
    const podcast = new mongoose.Schema({
        title: String,
        image: String,
        podcastUrl: String
    })
    podcast.method("toJSON", function() {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    const Podcast = mongoose.model('podcasts', podcast)

    return Podcast
    
}