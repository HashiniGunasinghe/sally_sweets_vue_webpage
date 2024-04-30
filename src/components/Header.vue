<!-- 

  <template>
    <div class="flex-center py-4 bg-gradient-to-b from-pink-500 to-light-pink-500">
       <div class="container mx-auto">
        <div class="flex items-center py-4"> 
           <div>
             <img class="h-20 w-30" src="C:\Users\WW\Desktop\Sally sweets\vue-project\src\images\Logo1.png" alt="Sally Sweets" />
           </div>
           <nav>
        
             <RouterLink to="/" class="text-white font-bold mx-4 hover:text-cyan-700 custom-a font-size-1.5">Home</RouterLink>
             <RouterLink to="/about" class="text-white font-bold mx-4 hover:text-cyan-700">About</RouterLink>
             <RouterLink to="/shop" class="text-white font-bold mx-4 hover:text-cyan-700">Shop</RouterLink>
             <RouterLink to="/event" class="text-white font-bold mx-4 hover:text-cyan-700">Event</RouterLink>
             <RouterLink to="/signin" class="text-white font-bold mx-4 hover:text-cyan-700">Sign In</RouterLink>
             <RouterLink to="/register" class="text-white font-bold mx-4 hover:text-cyan-700">Register</RouterLink>
            
            
           </nav>
         </div>
       </div>
    </div>
   </template>
   
   <script>
   export default {
    name: 'Header',
   }
   </script>




 -->


 <template>
   <div class="flex-center py-4 bg-gradient-to-b from-pink-500 to-light-pink-500">
       <div class="container mx-auto">
        <div class="flex items-center py-4"> 
           <div>
             <img class="h-20 w-30" src="C:\Users\WW\Desktop\Sally sweets\vue-project\src\images\Logo1.png" alt="Sally Sweets" />
           </div>
      <div
        class="absolute lg:static top-20 inset-x-0 flex flex-col lg:flex-row items-center gap-5 lg:gap-10 bg-primary-200 lg:bg-transparent pt-5 pb-10 px-5 lg:p-0 transition duration-500 lg:duration-200 lg:-translate-y-0"
        :class="!showMenu ? 'hidden lg:flex' : 'flex lg:hidden flex-col lg:flex-row'"
      ><nav>
        <router-link to="/" class="text-white font-bold mx-4 hover:text-cyan-700 custom-a font-size-1.5">Home</router-link>
        <router-link to="/about" class="text-white font-bold mx-4 hover:text-cyan-700 custom-a font-size-1.5">About</router-link>
        <router-link to="/shop" class="text-white font-bold mx-4 hover:text-cyan-700 custom-a font-size-1.5">Shop</router-link>
        <router-link to="/event" class="text-white font-bold mx-4 hover:text-cyan-700 custom-a font-size-1.5">Event</router-link>

        <!-- Conditionally render based on user authentication -->
        <template v-if="isAuthenticated"> 
        
          <router-link to="/signout" class="text-white font-bold mx-4 hover:text-cyan-700 custom-a font-size-1.5" @click.prevent="signOut">Sign Out</router-link>
          
        </template>

        <template v-else>
          <router-link to="/signin" class="text-white font-bold mx-4 hover:text-cyan-700 custom-a font-size-1.5">Sign In</router-link>
          <router-link to="/register" class="text-white font-bold mx-4 hover:text-cyan-700 custom-a font-size-1.5">Register</router-link>
        </template>
        </nav>
      </div>
      <div class="lg:hidden">
        <button @click="showMenu = !showMenu" class="text-white">
          Menu
        </button>
      </div>
    </div>
  </div></div>
</template>
<script>
   export default {
    name: 'Header',
   }
   </script>


<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';
import Voucher from '@/views/Voucher.vue';

const router = useRouter();
const showMenu = ref(false);
const auth = getAuth();

// Authentication state
const isAuthenticated = ref(false);

onAuthStateChanged(auth, (user) => {
  isAuthenticated.value = !!user;
});

const signOut = async () => {
  await firebaseSignOut(auth);
  router.push('/signin');
};
</script>

<style scoped>

</style>
