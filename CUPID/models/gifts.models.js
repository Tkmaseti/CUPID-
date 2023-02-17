module.exports = mongoose => {
    const gift = new mongoose.Schema({
        title: String,
        image: String,
        about: String,
        size: String,
        giftUrl: String
    })
    gift.method("toJSON", function() {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    const Gift = mongoose.model('gifts', gift)

    return Gift
    
}