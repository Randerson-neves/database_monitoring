import { Request, Response } from 'express';
import {Router} from 'express';
import QuerysController from './useCases/heavyQueries/heavyQueriesController';
import TransactionByTableController from './useCases/transactionByTable/transactionByTableController';

const router = Router();
const heavyQueriesController = new QuerysController();
const transactionByTableController = new TransactionByTableController();

router.get('/', (req: Request, res: Response) => {return res.json('Application already is running')});
router.get('/top-heavy-queries/:limit', heavyQueriesController.handle);
router.get('/inserted-data/:table?', transactionByTableController.handle);

export default router;
