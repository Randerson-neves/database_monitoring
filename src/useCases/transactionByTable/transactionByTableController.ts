import { Request, Response } from 'express';
import TransactionByTableUseCase from './transactionByTableUseCase';

export default class TransactionByTableController {
  async handle(req: Request, res: Response) {
    try {
      const { table } = req.params;
      const transactionByTableUseCase = new TransactionByTableUseCase();
      const insertByTable = table ? await transactionByTableUseCase.execute(table) : await transactionByTableUseCase.execute();

      res.json(insertByTable);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}