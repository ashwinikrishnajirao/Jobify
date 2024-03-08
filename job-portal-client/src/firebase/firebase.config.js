import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhMopyG_74lfTHp7IMMxBk9uhmsMX_CKE",
  authDomain: "job-portal-ashwinikrishnajirao.firebaseapp.com",
  projectId: "job-portal-ashwinikrishnajirao",
  storageBucket: "job-portal-ashwinikrishnajirao.appspot.com",
  messagingSenderId: "672173403974",
  appId: "1:672173403974:web:6b44a140bc078ba9deff47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;


