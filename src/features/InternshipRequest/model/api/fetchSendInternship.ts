import { db } from "@main/FirebaseProvider";
import { addDoc, collection } from "firebase/firestore";

import { IInternshipRequest } from "../types/internshipRequestTypes";

export const fetchSendInternship = async (data: IInternshipRequest) => {
  try {
    await addDoc(collection(db, "internship_candidates"), data);
  } catch (e) {
    console.log(e);
  }
};