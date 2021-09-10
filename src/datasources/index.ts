import { Context } from "telegraf";
import { Database } from "./database";

const database = new Database({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
});

export const createDatasources = (ctx: Context) => ({
  telegram: ctx,
  database
})

export type Datasources = ReturnType<typeof createDatasources>;
