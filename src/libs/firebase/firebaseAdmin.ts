// lib/firebaseAdmin.ts
import { cert, getApp, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// 1. Получаем данные из переменных окружения
const serviceAccount = {
  projectId: "agit-base",
  clientEmail: process.env.ADMIN_FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.ADMIN_FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
};

// 2. Проверка наличия ключа
if (!serviceAccount.privateKey) {
  throw new Error("FIREBASE_ADMIN_PRIVATE_KEY is not defined");
}

let adminApp;

try {
  // 3. Проверяем, есть ли уже такой инстанс
  adminApp = getApp("secondary");
} catch (error) {
  // 4. Если нет — создаём новый
  adminApp = initializeApp(
    {
      credential: cert({
        projectId: serviceAccount.projectId,
        clientEmail: serviceAccount.clientEmail,
        privateKey: serviceAccount.privateKey,
      }),
      projectId: serviceAccount.projectId, // ЯВНО передаём projectId
    },
    "secondary"
  );
}

// 5. Экспортируем Auth и Firestore
export const adminAuth = getAuth(adminApp);
export const adminDb = getFirestore(adminApp);
