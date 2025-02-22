// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth"
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAENchi7sI2525r_FJ8Y1wWMOtZQiggd6c",
  authDomain: "flowify-d8284.firebaseapp.com",
  projectId: "flowify-d8284",
  storageBucket: "flowify-d8284.firebasestorage.app",
  messagingSenderId: "855699430641",
  appId: "1:855699430641:web:f7864d3d84402bf7769d50",
  measurementId: "G-XNVGRNX8L8",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
})
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app
