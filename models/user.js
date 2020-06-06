const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

schema = new Schema({
    username: {
        type: String,
        required: true,
        unique:true,
        trim:true
    },
    password: {
        type: String,
        required: true
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
});

schema.methods.generateAuthToken = async function(fastify){
    const user = this;
    const token = fastify.jwt.sign({_id:user._id.toString()});
    user.tokens = [];
    user.tokens = user.tokens.concat({token});

    await user.save();
    return token;
}

schema.statics.findByCredentials = async(username,password)=>{
    const user = await User.findOne({username});
    if(!user){
        throw new Error('Unable to login ! ! !');
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        throw new Error('Unable to login ! ! !');
    }
    return user;
}




schema.pre('save', async function (next) {
    let user = this;
    console.log("befor save user", user.password);
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});
const User = mongoose.model('user', schema);

module.exports = User;