module.exports = mongoose => {
    const restuarant = new mongoose.Schema({
        title: String,
        image: String,
        about: String,
        rate: Number,
        restuarantUrl: String
    })
    restuarant.method("toJSON", function() {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    const Restuarant = mongoose.model('restuarants', restuarant)

    return Restuarant
    
}