import { loadEnv , defineConfig } from "@medusajs/utils"

process.env.MEDUSA_FF_MEDUSA_V2 = "true"
process.env.MEDUSA_FF_DISABLE_STOCK_LOCATION = "true"

loadEnv(process.env.NODE_ENV || "development", process.cwd())

export default defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL,
    jwtSecret: process.env.JWT_SECRET || "supersecret",
    cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    http: {
      storeCors: "http://localhost:3001",
      adminCors: "http://localhost:3001",
      authCors: process.env.AUTH_CORS,
    },
  },
  modules: {
    stockLocation: false,
    eventBus: {
      resolve: "@medusajs/event-bus-redis",
      options: {
        redisUrl: process.env.REDIS_URL,
      },
    },
    cacheService: {
      resolve: "@medusajs/cache-redis",
      options: {
        redisUrl: process.env.REDIS_URL,
      },
    },
  },
  plugins: [
    {
      resolve: "@medusajs/admin",
      options: {
        autoRebuid:true
      },
    },
  ],
})
