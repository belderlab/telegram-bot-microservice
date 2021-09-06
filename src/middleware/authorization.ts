import { Context } from "telegraf";
import { Update } from "typegram";

export const authorization = async (ctx: Context<Update>, next: () => Promise<void>) => {
  await next();
}