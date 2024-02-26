'use strict'

import Animal from '../Animal/animal.model.js'
import Appointment from './appointment.model.js'

export const test = async(req, res)=>{
   return res.send({message: 'Function test is running | appoinment'})
}

export const save = async(req, res)=>{
    try {
        //Caprurar Data
        let data = req.body;
        data.user = req.user._id//jlar el id del usuario logueado
        //Verfificar que exita el animla
        let animal = await Animal.findOne({_id: data.animal})
        if(!animal) return res.status(404).send({message: 'Animal not found'})
        //Validar que la mascota notenga una cita activa con esa persona
        let existAppointment = await Appointment.findOne({
            $or: [
                {
                    animal: data.animal,
                    user: data.user
                },
                {
                    date: data.date,
                    user: data.user
                }
            ]
        })
        if(animal == data.animal && user == data.user) true
        if(existAppointment) return res.send({message: 'Appointment already exist'})
        //Ejercicio: Que el usuario solo pueda tener una cita por dia
        //Guardar
        let appoinment = new Appointment(data)
        await appoinment.save()
        return res.send({message: `Appointment saved succesfully, for the date ${appoinment.data}`})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'error creating appoinment'})
    }
}