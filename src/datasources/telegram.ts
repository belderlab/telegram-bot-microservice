import { Context, Telegraf } from "telegraf";

export const telegram = (token: string, callback: (ctx: Context) => Promise<void>) => {
  const bot = new Telegraf(token);
  bot.launch();

  bot.use(async (ctx, next) => {
    try {
      await callback(ctx);
    } catch (err) {
      console.error(err);
    }
    await next();
  });

  return bot;
}
