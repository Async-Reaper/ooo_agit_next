import { collection, addDoc } from "firebase/firestore";
import { db } from "@main/FirebaseProvider";
import { IConsultationBodyRequest } from "../types/consultationTypes";

export const fetchSendConsultation = async (data: IConsultationBodyRequest) => {
   try {
      await addDoc(collection(db, "consultation"), data);
   } catch (e) {
      console.log(e);
   }
};
