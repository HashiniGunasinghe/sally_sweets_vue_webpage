import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from '@/router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa0BVGaEN05uKY4o-8dY-1ZFo0UAfF_tQ",
  authDomain: "sally-sweets-new.firebaseapp.com",
  projectId: "sally-sweets-new",
  storageBucket: "sally-sweets-new.appspot.com",
  messagingSenderId: "634819374702",
  appId: "1:634819374702:web:85ef8fe62ba9bbf6a8407f"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const app= createApp(App)
app.use(router)
app.mount('#app')

