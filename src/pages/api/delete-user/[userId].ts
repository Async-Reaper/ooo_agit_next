// pages/api/deleteUser.ts
import { adminAuth, adminDb } from "@libs/firebase/firebaseAdmin";
import { NextApiRequest, NextApiResponse } from "next";

export default async function deleteUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId } = req.query;

  if (typeof userId !== "string") {
    return res.status(400).json({ success: false, error: "Invalid user ID" });
  }

  try {
    // 1. Удаление из Firebase Auth
    await adminAuth.deleteUser(userId);

    // 2. Удаление документа пользователя из Firestore
    await adminDb.doc(`users/${userId}`).delete();


    return res.status(200).json({
      success: true,
      message: "Пользователь успешно удален",
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  }
}
