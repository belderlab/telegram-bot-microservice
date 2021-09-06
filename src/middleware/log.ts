import { Context } from "telegraf";
import { Update } from "typegram";

export const log = async (ctx: Context<Update>, next: () => Promise<void>) => {
  console.log('-'.repeat(100));
  console.log(ctx);

  await next();
}