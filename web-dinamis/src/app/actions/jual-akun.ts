"use server";

import { query } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createJualAkun(formData: FormData) {
  const nama_game = formData.get("nama_game") as string;
  const level = formData.get("level") as string;
  const harga = Number(formData.get("harga")) || 0;
  const deskripsi = formData.get("deskripsi") as string;

  // Pastikan nama tabel di database kamu nanti adalah 'jual_akun'
  await query(
    "INSERT INTO jual_akun (nama_game, level, harga, deskripsi) VALUES (?, ?, ?, ?)",
    [nama_game, level, harga, deskripsi]
  );

  revalidatePath("/admin/jual-akun");
  revalidatePath("/");
  redirect("/admin/jual-akun");
}

export async function updateJualAkun(id: number, formData: FormData) {
  const nama_game = formData.get("nama_game") as string;
  const level = formData.get("level") as string;
  const harga = Number(formData.get("harga")) || 0;
  const deskripsi = formData.get("deskripsi") as string;

  await query(
    "UPDATE jual_akun SET nama_game = ?, level = ?, harga = ?, deskripsi = ? WHERE id = ?",
    [nama_game, level, harga, deskripsi, id]
  );

  revalidatePath("/admin/jual-akun");
  revalidatePath("/");
  redirect("/admin/jual-akun");
}

export async function deleteJualAkun(id: number) {
  await query("DELETE FROM jual_akun WHERE id = ?", [id]);
  revalidatePath("/admin/jual-akun");
  revalidatePath("/");
}