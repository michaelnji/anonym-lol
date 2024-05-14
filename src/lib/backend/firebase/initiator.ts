import { firebaseConfig } from "$lib/backend/config";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
console.log(db);