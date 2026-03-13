import { betterAuth } from "better-auth";
import pg from "pg"

const { Pool } = pg



const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "postgres",
})

export const auth = betterAuth(
    {
        basePath:"/api",
        emailAndPassword: {
            enabled: true,
        },
       database: pool
    }
)
