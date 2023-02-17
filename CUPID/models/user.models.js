module.exports = mongoose => {
    const user = new mongoose.Schema({
        username: String,
        email: String,
        password: String,
        roles: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role"
        }]
    })
    user.method("toJSON", function() {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    const User = mongoose.model('users', user)

    return User
    
}