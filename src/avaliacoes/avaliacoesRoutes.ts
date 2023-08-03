import { Router } from 'express'
import { listaAvaliacoes, criaAvaliacao } from './avaliacoesController.js'

export const avaliacoesRouter = Router()

avaliacoesRouter.get('/', listaAvaliacoes)
avaliacoesRouter.post('/', criaAvaliacao)

export default (app) => {
  app.use('/avaliacoes', avaliacoesRouter)
}
