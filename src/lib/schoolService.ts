import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

export interface SchoolProfile {
  id: string;
  name: string;
}

const COLLECTION = 'schools';

/** Fetch all schools ordered by name */
export async function getAllSchools(): Promise<SchoolProfile[]> {
  try {
    const q = query(collection(db, COLLECTION), orderBy('name'));
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, name: d.data().name as string }));
  } catch (err) {
    console.error('[getAllSchools] Error:', err);
    return [];
  }
}

/** Add a new school */
export async function addSchool(name: string): Promise<SchoolProfile> {
  const ref = await addDoc(collection(db, COLLECTION), { name: name.trim() });
  return { id: ref.id, name: name.trim() };
}

/** Update an existing school's name */
export async function updateSchool(id: string, name: string): Promise<void> {
  await updateDoc(doc(db, COLLECTION, id), { name: name.trim() });
}

/** Delete a school document */
export async function deleteSchool(id: string): Promise<void> {
  await deleteDoc(doc(db, COLLECTION, id));
}
