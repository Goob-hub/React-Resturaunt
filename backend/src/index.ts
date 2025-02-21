import 'dotenv/config';
import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors';
import pg from 'pg'

const app = new Hono();
const port = 4000;

app.use(cors());

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

app.get("/menu", async (c) => {
  try {
    const data = await db.query("SELECT * FROM resturaunt_items");
    return c.json(data.rows);
  } catch (error) {
    console.error(error);
    return c.text('Database error', 500);
  }
});

app.post("/orders", async (c) => {
  try {
    const {full_name, email, street, postal_code, city, cart} = await c.req.json();
    try {
      const res = await db.query("INSERT INTO orders (full_name, email, postal_code, street, city, cart) VALUES ($1, $2, $3, $4, $5, $6)", [full_name, email, street, postal_code, city, cart]);
      return c.text("Success inserting data into sql database!");
    } catch (error) {
      console.log("Error inserting data into database!", error);
    }
    return c.text("Success getting order data from frontend!");
  } catch (error) {
    console.log("Error with hono server :(", error);
  }
});

console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port
});
