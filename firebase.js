import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyAjLAg8VFD1ZOvVKFo0yiOoy3yupDvZ0HA",
  authDomain: "student-portal-2dcc1.firebaseapp.com",
  projectId: "student-portal-2dcc1",
  storageBucket: "student-portal-2dcc1.firebasestorage.app",
  messagingSenderId: "265943289040",
  appId: "1:265943289040:web:b8d7b3ab502af43389e2d5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);