module.exports = mongoose => {
    const event = new mongoose.Schema({
        title: String,
        image: String,
        about: String,
        eventUrl: String
    })
    event.method("toJSON", function() {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    const Event = mongoose.model('events', event)

    return Event
    
}