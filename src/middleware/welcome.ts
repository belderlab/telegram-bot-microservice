import { Context } from "telegraf";
import { Update } from "typegram";

export const welcome = (ctx: Context<Update>) => ctx.reply("Hello world");
