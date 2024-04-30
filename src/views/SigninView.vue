<template>
    <div class="bg-pink-100 min-h-1/2-screen flex items-center justify-center">
      <div class="bg-pink-500  min-h-full flex items-center justify-center">
  
        <div class="w-full max-w-md p-8 bg-gradient-to-r from-red-350 via-yellow-300 to-orange-200 rounded-md shadow-md mx-auto">
          
          <form @submit.prevent="signInWithEmail" class="mb-4">
            <label for="email" class="text-black">Email:</label>
            <input
              type="email"
              id="email"
              v-model="email"
              required
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <br />
            <label for="password" class="text-black">Password:</label>
            <input
              type="password"
              id="password"
              v-model="password"
              required
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <br />
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Sign In with Email
            </button>
          </form>
  
          <button
            @click="signInWithGoogle"
            class="bg-red-350 hover:bg-red-450 text-black font-bold py-2 px-4 rounded"
          >
            <img
              src="https://banner2.cleanpng.com/20180423/gkw/kisspng-google-logo-logo-logo-5ade7dc753b015.9317679115245306313428.jpg"
              alt="Google Logo"
              class="inline-block h-4 w-4 mr-2"
            />
            Sign In with Google
          </button>
  
          <p v-if="message" class="text-orange-200 mt-4">{{ message }}</p>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  import {
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
  } from "firebase/auth";
  
  export default {
    name: "RegisterView",
    data() {
      return {
        email: "",
        password: "",
        message: "",
      };
    },
    methods: {
      async signInWithEmail() {
        const auth = getAuth();
        try {
          await signInWithEmailAndPassword(auth, this.email, this.password);
          this.message = "Sign in with email successful!";
          this.$router.push("/");
        } catch (error) {
          console.error(error);
          this.message = "Sign in with email failed.";
        }
      },
      async signInWithGoogle() {
        const auth = getAuth();
        try {
          const provider = new GoogleAuthProvider();
          await signInWithPopup(auth, provider);
          this.message = "Sign in with Google successful!";
          this.$router.push("/");
        } catch (error) {
          console.error(error);
          this.message = "Sign in with Google failed.";
        }
      },
    },
  };
  </script>
  