import {addDoc, collection} from "firebase/firestore";
import {db} from "@main/FirebaseProvider";
import {IMailing} from "../types/mailingTypes";

export const fetchMailing = async (data: IMailing) => {
   try {
      await addDoc(collection(db, "mailing"), data);
   } catch (e) {
      console.log(e);
   }
};