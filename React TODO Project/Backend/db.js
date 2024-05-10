import mongoose from 'mongoose';
import { title } from 'process';
const { Schema } = require('mongoose');

mongoose.connect("mongodb://dakshgrows:dakshpurohit04@ac-0x2xkcs-shard-00-00.eh0sgkf.mongodb.net:27017,ac-0x2xkcs-shard-00-01.eh0sgkf.mongodb.net:27017,ac-0x2xkcs-shard-00-02.eh0sgkf.mongodb.net:27017/TODO?replicaSet=atlas-y4n08k-shard-0&ssl=true&authSource=admin")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('TODO', todoSchema);

module.exports = {
    TODO : TODO
}