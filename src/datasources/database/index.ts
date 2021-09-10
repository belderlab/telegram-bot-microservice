import { SQLDataSource } from "datasource-sql";
import { State } from "./types";

const TABLE_NAME = {
  STATE: 'state'
}

export class Database extends SQLDataSource {
  getState() {
    return this.knex.select('*').from<State>(TABLE_NAME.STATE).first();
  }

  writeState(id: number, route: string) {
    return this.knex.insert<State>({ id, route }).into<State>(TABLE_NAME.STATE).onConflict('id').merge();
  }

  reset() {
    return this.knex<State>(TABLE_NAME.STATE).truncate();
  }
}
