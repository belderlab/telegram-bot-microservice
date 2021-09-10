import './utils/dotenv';
import compose from "koa-compose";
import { createDatasources } from "./datasources";
import { telegram } from "./datasources/telegram";
import { handlers } from "./handlers";
import { logPerformance } from "./middleware/log";
import { state } from "./middleware/state";
import { Context } from "./types";

const middlewares = [logPerformance, state];

telegram(process.env.TELEGRAM_TOKEN, async (ctx) => {
  const datasources = createDatasources(ctx);
  const context: Context = { datasources, state: {} };

  const composed = compose([...middlewares, handlers]);
  composed(context);
});
