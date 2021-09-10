import { Handler } from "../types";

export const state: Handler = async (context, next) => {
  const { datasources: { database } } = context;
  const databaseState = await database.getState();

  context.state.route = databaseState?.route;

  next();
}
