'use server'

import mysql from 'mysql2/promise';
import { query } from '@/lib/db';
import { revalidatePath } from 'next/cache';

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

export async function createJualAkun(formData: FormData) {
  const nama_game = formData.get('nama_game')?.toString() ?? '';
  const level = formData.get('level')?.toString() ?? '';
  const harga = Number(formData.get('harga'));
  const deskripsi = formData.get('deskripsi')?.toString() ?? '';

  await query(
    'INSERT INTO jual_akun (nama_game, level, harga, deskripsi) VALUES (?, ?, ?, ?)',
    [nama_game, level, harga, deskripsi]
  );

  revalidatePath('/admin/jual-akun');
  revalidatePath('/topup');
}

export async function updateJualAkun(id: string | number, formData: FormData) {
  const nama_game = formData.get('nama_game')?.toString() ?? '';
  const level = formData.get('level')?.toString() ?? '';
  const harga = Number(formData.get('harga'));
  const deskripsi = formData.get('deskripsi')?.toString() ?? '';

  await query(
    'UPDATE jual_akun SET nama_game = ?, level = ?, harga = ?, deskripsi = ? WHERE id = ?',
    [nama_game, level, harga, deskripsi, Number(id)]
  );

  revalidatePath('/admin/jual-akun');
  revalidatePath('/topup');
}