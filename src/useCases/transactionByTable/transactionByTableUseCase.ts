import TransactionModel from './transactionByTableModel';

export default class TransactionByTableUseCase {
  async execute(table?:string) {
    const transactionByTableModel = await TransactionModel.getTransactionByTable(table);
    return transactionByTableModel;
  }
}