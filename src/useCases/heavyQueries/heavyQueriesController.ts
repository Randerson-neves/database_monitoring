import { Request, Response } from 'express';
import GetHeavyQueriesUseCase from './heavyQueriesUseCase';

export default class QuerysController {
  async handle(req: Request, res: Response) {
    try {
      const limit = Number(req.params.limit);
      const getHeavyQueriesUseCase = new GetHeavyQueriesUseCase();
      const heavyQueries = await getHeavyQueriesUseCase.execute(limit);
      res.json(heavyQueries);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao obter as consultas mais pesadas.' });
    }
  }
}