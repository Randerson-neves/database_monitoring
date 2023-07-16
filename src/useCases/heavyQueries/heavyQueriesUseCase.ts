import HeavyQueryModel from './heavyQueriesModel';

export default class GetHeavyQueriesUseCase {
  async execute(limit:number) {
    const heavyQueries = await HeavyQueryModel.getHeavyQueries(limit);
    return heavyQueries;
  }
}