import knex from '../../database/knexfile';

interface ITransactionData {
  table: string;
  table_rows: number;
  data_length: number;
  index_length: number;
}

export default class TransactionModel {
  static async getTransactionByTable(table?: string): Promise<ITransactionData[]> {
    const query = knex
      .select(
        'table_name as table',
        'table_rows',
        'data_length',
        'index_length'
      )
      .from('information_schema.TABLES')
      .where('TABLE_SCHEMA', 'beedoo')
      .groupBy('table_name')
      .orderBy('table_rows', 'desc');

    if (table) {
      query.where('table_name', table); 
    }

    const transactionByTable: ITransactionData[] = await query;
    return transactionByTable;
  }
}