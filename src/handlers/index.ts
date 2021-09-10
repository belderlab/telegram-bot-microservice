import compose from "koa-compose";
import { Handler } from "../types";
import { debug } from "./debug";
import { welcome } from "./welcome";

const middlewares = [
  welcome,
  debug
];

export const handlers: Handler = async (context, next) => {
  const composed = compose(middlewares);
  composed(context, next);

  // welcome(context, next);
  // handlerA(context);
  // handlerB(context);
  // handlerC(context);
}
