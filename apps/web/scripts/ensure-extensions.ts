import { config } from "dotenv"
import { Client } from "pg"

config({
  path: ".env.local",
})

async function main() {
  const databaseUrl = process.env.DATABASE_URL
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is missing. Set it in Vercel or apps/web/.env.local")
  }

  const client = new Client({
    connectionString: databaseUrl,
  })

  try {
    await client.connect()
    await client.query("CREATE EXTENSION IF NOT EXISTS vector")
    console.log("[ensure-extensions] pgvector extension ready")
  } finally {
    await client.end()
  }
}

main().catch((error) => {
  console.error("[ensure-extensions] Failed to ensure pgvector extension")
  console.error(error)
  process.exit(1)
})
