const { Schema, model, Mongoose } = require('mongoose');

const PinSchema = new Mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    title: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        min: 5,
    },

    breed: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        min: 5,
    },

    description: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        min: 5,
    },

    long: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
    },

    lat: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
    },
})