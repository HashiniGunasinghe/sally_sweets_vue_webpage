<template>
    <div class="signout-container">
     
      <p>Signing out...</p>
    </div>
  </template>
  
  <script>
  import { getAuth, signOut } from 'firebase/auth';
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'Signout',
    setup() {
      const router = useRouter();
      const auth = getAuth();
  
      onMounted(async () => {
        try {
          await signOut(auth); 
          router.push('/'); 
        } catch (error) {
          console.error("Sign out error:", error);
          
        }
      });
  
      
    }
  };
  </script>
  
  <style scoped>
  .signout-container {
    
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  </style>