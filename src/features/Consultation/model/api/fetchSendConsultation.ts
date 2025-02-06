import { db } from "@main/FirebaseProvider";
import { addDoc,collection } from "firebase/firestore";

import { IConsultationBodyRequest } from "../types/consultationTypes";

export const fetchSendConsultation = async (data: IConsultationBodyRequest) => {
  try {
    await addDoc(collection(db, "consultation"), data);
  } catch (e) {
    console.log(e);
  }
};
