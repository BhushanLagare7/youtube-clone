import { Redis } from "@upstash/redis";

const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

if (!redisUrl || !redisToken)
  throw new Error(
    "Error: Please add UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN from Upstash Dashboard to .env or .env.local",
  );

export const redis = new Redis({
  url: redisUrl,
  token: redisToken,
});
