import 'dotenv/config';
import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import pg from 'pg'

const app = new Hono();
const port = 3000;

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

db.connect();

app.get('/', (c) => {
  return c.text('Hello Hono!')
});

app.get("/items", async (c) => {
  try {
    let data = await db.query("SELECT * FROM resturaunt_items");
    return c.json(data.rows);
  } catch (error) {
    console.error(error);
    return c.text('Database error', 500);
  }
});

console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
