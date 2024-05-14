import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../initiator";
import type { Collections, Message, Profile } from "$lib/types";

export async function addData(data: Profile | Message, table: Collections) {
	try {
		// Add a new document in collection
		const res = await addDoc(collection(db, table), data);
		console.log(res.path);
	} catch (error) {
		console.log(error);
		// todo: write an error handler
	}
}