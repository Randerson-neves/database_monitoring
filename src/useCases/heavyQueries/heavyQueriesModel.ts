import Knex from '../../database/knexfile';

interface IHeavyQuery {
  normalized_query: string;
  all_occurr: number;
  avg_t: string;
  total_lock_t: string;
  sum_rows_selected: number;
  sum_rows_scanned: number;
  sum_created_tmp_tables: number;
  sum_no_index_used: number;
}

export default class HeavyQueryModel {
    static async getHeavyQueries(limit:number): Promise<IHeavyQuery[]> {
        const query = Knex('performance_schema.events_statements_summary_by_digest')
        .select([
            'digest_text as normalized_query',
            'count_star as all_occurr',
            Knex.raw('CONCAT(ROUND(avg_timer_wait / 1000000000000, 3), " s") as avg_t'),
            'sum_rows_sent as sum_rows_selected',
            'sum_rows_examined as sum_rows_scanned',
            'sum_created_tmp_tables',
            'sum_no_index_used',
        ])
        .whereNotNull('schema_name')
        .orderBy('avg_t', 'desc')
        .limit(limit);

        const heavyQueries: IHeavyQuery[] = await query;

        return heavyQueries;
  }
}