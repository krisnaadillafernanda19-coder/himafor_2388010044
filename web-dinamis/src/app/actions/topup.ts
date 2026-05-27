"use server";

import { query } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function getTopupList() {
  return [
    { id: 1, name: '70 Diamond FF', price: 'Rp 10.000' },
    { id: 2, name: '140 Diamond ML', price: 'Rp 35.000' }
  ];
}

export async function createBerita(formData: FormData) {
  const judul = formData.get('judul')?.toString() ?? '';
  const image = formData.get('image')?.toString() ?? '';
  const excerpt = formData.get('excerpt')?.toString() ?? '';
  const konten = formData.get('konten')?.toString() ?? '';
  const is_published = formData.get('is_published') ? 1 : 0;

  await query(
    'INSERT INTO berita (judul, image, excerpt, konten, is_published, created_at) VALUES (?, ?, ?, ?, ?, NOW())',
    [judul, image, excerpt, konten, is_published]
  );

  revalidatePath('/admin/berita');
}

export async function updateBerita(id: number, formData: FormData) {
  const judul = formData.get('judul')?.toString() ?? '';
  const image = formData.get('image')?.toString() ?? '';
  const excerpt = formData.get('excerpt')?.toString() ?? '';
  const konten = formData.get('konten')?.toString() ?? '';
  const is_published = formData.get('is_published') ? 1 : 0;

  await query(
    'UPDATE berita SET judul = ?, image = ?, excerpt = ?, konten = ?, is_published = ? WHERE id = ?',
    [judul, image, excerpt, konten, is_published, id]
  );

  revalidatePath('/admin/berita');
}

export async function deleteBerita(id: number) {
  await query('DELETE FROM berita WHERE id = ?', [id]);
  revalidatePath('/admin/berita');
}

export async function togglePublishBerita(id: number, currentStatus: number) {
  await query('UPDATE berita SET is_published = ? WHERE id = ?', [currentStatus === 1 ? 0 : 1, id]);
  revalidatePath('/admin/berita');
}
