import { Telegraf } from 'telegraf';
import { authorization } from './middleware/authorization';
import { datasources } from './middleware/datasources';
import { routing } from './middleware/routing';
import { welcome } from './middleware/welcome';
import { log } from './middleware/log';
import dotenv from 'dotenv';

dotenv.config();

const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

bot.start(welcome);

bot.use(log);
bot.use(datasources);
bot.use(authorization);
bot.use(routing);

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
