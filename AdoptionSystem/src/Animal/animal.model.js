import mongoose from "mongoose"

const animalSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    breed:{
        type: String,
        required: true
    },
    birthdate:{
        type: String,
        requires: true
    },
    keeper:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    versionKey: false //Desabilitar el __V
})

export default mongoose.model('animal', animalSchema)