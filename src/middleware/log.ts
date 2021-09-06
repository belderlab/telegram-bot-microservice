import { Context } from "telegraf";
import { Update } from "typegram";

export const log = async (ctx: Context<Update>, next: () => Promise<void>) => {
  console.log('-'.repeat(100));
  const { botInfo, update } = ctx;
  console.log({ botInfo, update });

  await next();
}