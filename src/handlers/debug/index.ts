import { Handler, isTextMessage } from "../../types";

export const debug: Handler = async (
  { datasources: { telegram, database }, state },
  next
) => {
  if (!isTextMessage(telegram.message)) return next();

  if (telegram.message.text === "/reset" && !!telegram.from?.id) {
    await database.reset();
    telegram.reply("Database reset success");
    return next();
  }

  telegram.replyWithMarkdownV2(
    "```\n" + JSON.stringify({ state }, null, 2) + "```"
  );
  return next();
};
