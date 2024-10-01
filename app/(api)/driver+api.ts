import { neon } from "@neondatabase/serverless";
import { Client } from "@neondatabase/serverless";

export async function GET(request: Request) {
  try {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const response = await sql("SELECT * FROM drivers");

    return Response.json({ data: response });
  } catch (error) {
    console.error("Error fetching drivers:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// export async function onRequestGet(context) {
//   const client = new Client(context.env.DATABASE_URL);
//   await client.connect();

//   // Logic to fetch all drivers from your database
//   const { rows } = await client.query("SELECT * FROM drivers;");
//   return new Response(JSON.stringify(rows));
// }

// export async function GET(request: Request) {
//   try {
//     const sql = new Client(`${process.env.DATABASE_URL}`);
//     const response = await sql.query("SELECT * FROM drivers");
//     return Response.json({ data: response });
//   } catch (error) {
//     console.error("Error fetching drivers:", error);
//     return Response.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }
