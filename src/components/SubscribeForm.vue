<!-- SubscribeForm.vue -->
<script>
import axios from 'axios';

export default {
data() {
  return {
    email: '',
  };
},
created() {
  // JSON server running on http://localhost:3000
  this.apiBaseURL = 'http://localhost:3000/emails';
  this.api = axios.create({
    baseURL: this.apiBaseURL,
    headers: { 'Content-Type': 'application/json' },
  });
},
methods: {
  subscribe() {
    this.api.post('/', { email: this.email })
      .then(() => {
        // Reset the email input after successful subscription
        this.email = '';
        alert('Subscription successful!');
      })
      .catch(error => {
        console.error('Error subscribing:', error);
        alert('Subscription failed. Please try again later.');
      });
  },
},
};
</script>



<!-- SubscribeForm.vue
<template>
  <div class="signUpCard bg-pink-500 py-12 px-10 rounded-lg shadow-lg text-black">
  <div class="mb-4">
    <h4 class="text-lg font-bold mb-2">Subscribe to Our Sally sweets</h4>
    <form @submit.prevent="subscribe" class="flex items-center">
      <input v-model="email" type="email" placeholder="Enter your email" class="p-2  text-black rounded-l-lg w-full"> 
  <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
  Subscribe
  </button>
  <br>
  <br>
    </form>
  </div>
</div>
</template>

<script>
  import axios from 'axios';
  
  export default {
  data() {
    return {
      email: '',
    };
  },
  created() {
    // JSON server running on http://localhost:3000
    this.apiBaseURL = 'http://localhost:3000/emails';
    this.api = axios.create({
      baseURL: this.apiBaseURL,
      headers: { 'Content-Type': 'application/json' },
    });
  },
  methods: {
    subscribe() {
      this.api.post('/', { email: this.email })
        .then(() => {
          // Reset the email input after successful subscription
          this.email = '';
          alert('Subscription successful!');
        })
        .catch(error => {
          console.error('Error subscribing:', error);
          alert('Subscription failed. Please try again later.');
        });
    },
  },
  };
  </script> -->