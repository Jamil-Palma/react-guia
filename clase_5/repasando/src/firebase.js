// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4F6XxQMk3HJK8Wte_3EiqKsp14F7WBKQ",
  authDomain: "test-login-react-curso.firebaseapp.com",
  projectId: "test-login-react-curso",
  storageBucket: "test-login-react-curso.firebasestorage.app",
  messagingSenderId: "751501529896",
  appId: "1:751501529896:web:135d755d335b298144361d",
  measurementId: "G-PJNSFPF8NX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account",
})
export {auth, googleProvider, analytics}
