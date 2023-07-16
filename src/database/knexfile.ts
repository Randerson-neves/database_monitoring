import knex from 'knex';
import 'dotenv/config'

const Knex = knex({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port:3306,
    database: 'beedoo'
  }
});

export default Knex;
