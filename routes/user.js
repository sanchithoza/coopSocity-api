const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('../db/connection');
const User = require('../models/user');

module.exports = function(fastify,option,done){
    fastify.post('/register',async(request,reply)=>{
        let data = new User(request.body);
        try {
            const user = await data.save();
            const token = await user.generateAuthToken(fastify);
            reply.send(user);
        } catch (error) {
            reply.status(400).send(error);
        }
       
    });

    fastify.post('/login',{
        preValidation: [fastify.authenticate]
      },async(request,reply)=>{
        try {
            const user = await User.findByCredentials(request.body.username,request.body.password);
            const token = await user.generateAuthToken(fastify);
            reply.status(200).send(user);
        } catch (error) {
            reply.status(400).send(error);
        }
    });

    done();
};