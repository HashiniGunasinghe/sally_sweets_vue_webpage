   <template>
    <div>
      <div class="bg-pink-100 p-8 rounded-md shadow-md">
        <form @submit.prevent="registerWithEmailAndSubscribe">
          <label for="email" class="text-black">Email:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            class="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <br />
          <label for="password" class="text-black">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <br />
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Register with Email and Subscribe
          </button>
    
          <p v-if="message" class="text-red-500 mt-4">{{ message }}</p>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import SubscribeForm from '@/components/SubscribeForm.vue';
  import axios from 'axios';
  import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
  
  export default {
    components:SubscribeForm,
    name: 'RegisterAndSubscribe',
    data() {
      return {
        email: '',
        password: '',
        message: ''
      };
    },
    methods: {
      async registerWithEmailAndSubscribe() {
        // Register with Email in Firebase
        const auth = getAuth();
        try {
          await createUserWithEmailAndPassword(auth, this.email, this.password);
          this.message = 'Register with email successful!';
        } catch (error) {
          console.error(error);
          this.message = 'Register with email failed.';
          return;
        }

      
  
        // Subscribe with Email in External JSON
        const apiBaseURL = 'http://localhost:3000/emails';
        const api = axios.create({
          baseURL: apiBaseURL,
          headers: { 'Content-Type': 'application/json' },
        });
        try {
          await api.post('/', { email: this.email });
          this.message = 'Subscription successful!';
          this.$router.push('/voucher')

        } catch (error) {
          console.error('Error subscribing:', error);
          this.message = 'Subscription failed. Please try again later.';
        }
      },
    },
  };
  </script>
  



<!-- 
   <template>
    <div class="bg-pink-100 p-8 rounded-md shadow-md">
      <form @submit.prevent="registerWithEmailAndSubscribe">
        <label for="email" class="text-black">Email:</label>
        <input
          type="email"
          id="email"
          v-model="email"
          required
          class="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <br />
        <label for="password" class="text-black">Password:</label>
        <input
          type="password"
          id="password"
          v-model="password"
          required
          class="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <br />
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Register with Email and Subscribe
        </button>
  
        <p v-if="message" class="text-red-500 mt-4">{{ message }}</p>
      </form>
    </div>
  </template>
  
  <script>
import axios from 'axios';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import SubscribeForm from "c:/Users/WW/Desktop/Sally sweets/vue-project/src/components/SubscribeForm.vue"; 

export default {
  name: 'RegisterView',
  components: {
    SubscribeForm
  },
  data() {
    return {
      email: '',
      password: '',
      message: ''
    };
  },
  methods: {
    async registerWithEmailAndSubscribe() {
      try {
        await this.registerWithEmail();
        await this.$refs.subscribeForm.subscribe();
        this.email = ''; // Reset email field
        this.password = ''; // Reset password field
        this.message = 'Registration and subscription successful!';
      } catch (error) {
        console.error('Error during registration and subscription:', error);
        this.message = 'Registration and subscription failed.';
      }
    },
    async registerWithEmail() {
      const auth = getAuth();
      try {
        await createUserWithEmailAndPassword(auth, this.email, this.password);
        this.$router.push('/voucher');
      } catch (error) {
        console.error(error);
        throw new Error('Register with email failed.');
      }
    }
  }
};
</script> -->
