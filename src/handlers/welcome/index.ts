import { STATE } from "../../datasources/database/state";
import { Handler, isTextMessage } from "../../types";

export const welcome: Handler = async ({ datasources: { database, telegram }, state }, next) => {
  if (!isTextMessage(telegram.message)) return next();

  if (telegram.message.text === '/start' && !!telegram.from?.id) {
    database.writeState(telegram.from.id, STATE.ONBOARING).asCallback(() => {});
    telegram.reply('Hi');
  }

  await next();
}
