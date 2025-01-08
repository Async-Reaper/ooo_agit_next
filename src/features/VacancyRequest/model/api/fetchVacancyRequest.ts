import { addDoc, collection } from "firebase/firestore";
import { db } from "@main/FirebaseProvider";
import { IVacancyRequest } from "../types/vacancyRequestTypes";

export const fetchVacancyRequest = async (data: IVacancyRequest) => {
   try {
      await addDoc(collection(db, "vacancy_request"), data);
   } catch (e) {
      console.log(e);
   }
};
