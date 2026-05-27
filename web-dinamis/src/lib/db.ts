import mysql from "mysql2/promise";

const connection = mysql.createPool({
  host: process.env.DB_HOST || "db-webdinamis", // Sesuai nama service di docker-compose
  user: "root",
  password: "password_anda",
  database: "nama_database_anda",
});

export async function query<T>(sql: string, params?: any[]): Promise<T> {
  const [results] = await connection.execute(sql, params);
  return results as T;
}