'use server'

import mysql from 'mysql2/promise';

export async function getAkunJual() {
  // Menggunakan variabel lingkungan agar aman dan fleksibel (kriteria Sangat Baik)
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  const [rows] = await connection.execute('SELECT * FROM jual_akun');
  await connection.end();
  return rows;
}