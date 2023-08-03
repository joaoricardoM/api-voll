/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { planosDeSaudeGet } from './planoDeSaudeController'

export const planosDeSaudeRouter = Router()

planosDeSaudeRouter.get('/', planosDeSaudeGet)

export default (app) => {
  app.use('/planosdesaude', planosDeSaudeRouter)
}
