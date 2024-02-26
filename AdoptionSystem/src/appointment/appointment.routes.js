'use strict'

import { Router } from 'express'
import { test, save } from './appointment.controller.js'
import { validateJwt } from '../middlewares/validate-jwt.js'

const api = Router()

//Rutas privadas
api.get('/test', test)

api.post('/save', validateJwt, save)


export default api
