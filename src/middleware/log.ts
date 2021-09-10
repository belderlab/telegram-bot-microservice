import { Handler } from "../types";

export const logPerformance: Handler = async ({ datasources, state }, next) => {
  console.log(datasources.telegram);

  const start = process.hrtime.bigint();
  await next();
  const elapsed = (process.hrtime.bigint() - start) /// BigInt(1000000);
  console.log("Handlers take time", elapsed.toString(), "ns.");
  console.log({ state });
  console.log('-'.repeat(100));
};
