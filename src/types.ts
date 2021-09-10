import { Datasources } from "./datasources";
import { Message } from 'typegram';

export type Context = {
  datasources: Datasources;
  state: {
    route?: string;
  }
};

export type Handler = (context: Context, next: () => Promise<void>) => Promise<void>;

export const isTextMessage = <T>(u: T | undefined): u is T & Message.TextMessage => !!u && 'text' in u;