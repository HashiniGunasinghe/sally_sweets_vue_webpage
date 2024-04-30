<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>






<template>

  <div class="bg-pink-100 p-4 text-center">

    <h1 class="text-6xl font-bold text-gray-800 font-display">Welcome to Sally Sweets!</h1>

    <div class="flex justify-center items-center flex-wrap mt-8">
<br>
<img 
  src="C:\Users\WW\Desktop\Sally sweets\vue-project\src\images\sally.jpeg"
  alt="Sally Sweets Shop"
  class="w-full md:w-1/2 rounded-lg shadow-lg mb-8 md:mb-0">

<br>

<div class="md:w-1/2 md:ml-4 text-left">
  <p class="text-lg text-gray-700">
    Sally Sweets is a lovely little sweet shop located in the heart of Leek. We have all sorts of sweets including chocolate bars, pick-and-mix, retro candy and American candy. Come visit us for the biggest selection of sweets in town!
  </p>

<br>
  <p class="mt-4 text-lg text-gray-700">
    Our side event room is perfect for children's birthday parties, adult retro nights, and private functions. We provide sweet packages and decorations to make your event delicious and memorable!
  </p>
</div>

</div>


    
    <br>
    <br>

    
    <div class="mt-8">
      <div class="max-w-lg mx-auto bg-pink-500 rounded-lg shadow-lg p-8">
        <p class="text-2xl font-bold text-center text-gray-800 mb-4">SUBSCRIBE TO GET YOUR DISCOUNT VOUCHER!!!</p>
        <div class="flex justify-center">
          <button
            class="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
            @click="goToLogin"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  

  <div class="text-center mt-8">
    
    <h2 class="text-3xl font-bold">Our Popular Sweets</h2>

    
      <div class="px-4 py-5 sm:px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="mx-4">
        <img src="C:\Users\WW\Desktop\Sally sweets\vue-project\src\images\chocolate bars.jpeg" class="w-75 h-75 rounded shadow">
        <p class="mt-2 font-bold">Chocolate Bars</p>
        <p class="text-gray-600">$2 each</p>
        <p class="text-sm text-gray-500">Variety of delicious chocolate bars.</p>  
      </div>

      <div class="mx-4">
        <img src="C:\Users\WW\Desktop\Sally sweets\vue-project\src\images\american candy.jpeg" class="w-75 h-75 rounded shadow">
        <p class="mt-2 font-bold">American Candy</p>
        <p class="text-gray-600">$2 each</p>
        <p class="text-sm text-gray-500">Indulge in some of the best American sweets.</p>
      </div>

      <div class="mx-4">
        <img src="C:\Users\WW\Desktop\Sally sweets\vue-project\src\images\pick and mix.jpeg" class="w-75 h-75 rounded shadow">
        <p class="mt-2 font-bold">Pick and mix</p>
        <p class="text-gray-600">$2 per pack</p>
        <p class="text-sm text-gray-500">A great mix of candies to pick from.</p>
      </div>
      <div class="mx-4">
        <img src="C:\Users\WW\Desktop\Sally sweets\vue-project\src\images\retro candy.jpeg" class="w-75 h-75 rounded shadow">
        <p class="mt-2 font-bold">Retro Candy</p>
        <p class="text-gray-600">$2 per pack</p>
        <p class="text-sm text-gray-500">Throwback to the golden days with these sweets.</p>
      </div>


      </div>
      </div>
    </div>

    <div class="flex justify-center">
  <button
    class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    @click="goToShop"
  >
    See our sweets
  </button>
</div>

    
    <div class="mt-8">
      <div class="max-w-full mx-auto bg-pink-500 rounded-lg shadow-lg p-8">
        <p class="text-2xl font-bold text-center text-gray-800 mb-4">Place orders via our contact number!!!</p>
        <p class="text-2xl font-bold text-center text-gray-800 mb-4">(+84) 777 123 450</p>

      </div>
    </div>
  

<br>


<h2 class="text-3xl font-bold text-center mb-8">Events at Sally's Sweets</h2>

<div class="px-5 py-5 sm:px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

  <div class="bg-white p-8 rounded-lg shadow-md">
    <img src="C:\Users\WW\Desktop\Sally sweets\vue-project\src\images\rn.jpeg" class="w-75 h-75 rounded shadow">
    <h3 class="text-2xl font-semibold mb-4">Retro Nights</h3>
    <p class="text-gray-600">Enjoy our retro-themed nights with candy from yesteryear. Sweet packages available.</p>
  </div>

  <div class="bg-white p-8 rounded-lg shadow-md">
    <img src="C:\Users\WW\Desktop\Sally sweets\vue-project\src\images\pf.jpeg" class="w-75 h-75 rounded shadow">
    <h3 class="text-2xl font-semibold mb-4">Private Functions</h3>
    <p class="text-gray-600">Host your private party or corporate event in our shop. Catering and sweets packages available.</p>
  </div>

  <div class="bg-white p-8 rounded-lg shadow-md">
    <img src="C:\Users\WW\Desktop\Sally sweets\vue-project\src\images\children party.jpeg" class="w-75 h-75 rounded shadow">
    <h3 class="text-2xl font-semibold mb-4">Children's Parties</h3>
    <p class="text-gray-600">We offer party packages with sweets, decorations, and favors to make your child's day special.</p>
  </div>
</div>
</div>



<div class="flex justify-center">
  <button
    class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    @click="goToEvents"
  >
    See more info
  </button>
  <br>
  <br>
</div>
<br>
<br>
<!-- <div class="signUpCard bg-pink-500 py-12 px-10 rounded-lg shadow-lg text-white">
<h2 class="text-3xl font-bold text-center mb-8">Subscribe Us!!!!</h2>
<form @submit.prevent="subscribe">
  
  <input 
    v-model="email"
    type="email" 
    class="border p-2 w-full"
    placeholder="Enter your email">

  <button
    type="submit"
    class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"    
  >
    Subscribe
  </button>

  <p v-if="subscribed" class="text-red-600 mt-4">
    Subscribed successfully!
  </p>

</form>


</div> -->
<subscribe-form></subscribe-form>
</div>


</template>


<script>

import SubscribeForm from '@/components/Sub2.vue';


  
export default {
  components:  SubscribeForm ,
  data() {
    return {
      email: ''
      
    }
  },
  methods: {
    goToShop() {
      this.$router.push('/shop');
    },
    goToEvents() {
      this.$router.push('/event');
    },
    goToLogin() {
      this.$router.push('/register');
    }
    // },
    // subscribe() {
      
      
    //   this.subscribed = true;
    // }
  }
}
</script>


<!-- <template>
  <div class="bg-pink-100 p-4 text-center">

    <h1 class="text-6xl font-bold text-gray-800 font-display">Welcome to Sally Sweets!</h1>

    <div class="flex justify-center items-center flex-wrap mt-8">

      <img 
        src="C:\Users\WW\Desktop\Sally sweets\vue-project\src\images\sally.jpeg"
        alt="Sally Sweets Shop"
        class="w-full md:w-1/2 rounded-lg shadow-lg mb-8 md:mb-0"
      >

      <div class="md:w-1/2 md:ml-4 text-left">
        <p class="text-lg text-gray-700">
          Sally Sweets is a lovely little sweet shop located in the heart of Leek. We have all sorts of sweets including chocolate bars, pick-and-mix, retro candy and American candy. Come visit us for the biggest selection of sweets in town!
        </p>

        <p class="mt-4 text-lg text-gray-700">
          Our side event room is perfect for children's birthday parties, adult retro nights, and private functions. We provide sweet packages and decorations to make your event delicious and memorable!
        </p>
      </div>

    </div>
    
    <div class="mt-8">
      <div class="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8">
        <p class="text-2xl font-bold text-center text-gray-800 mb-4">LOGIN TO GET YOUR DISCOUNT VOUCHER!!!</p>
        <div class="flex justify-center">
          <button
            class="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
            @click="goToLogin"
          >
            Login
          </button>
        </div>
      </div>
    </div>

    <div class="mt-8">
      <h2 class="text-3xl font-bold">Our Popular Sweets</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
        <div v-for="(sweet, index) in popularSweets" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden">
          <img :src="sweet.image" :alt="sweet.name" class="w-full h-48 object-cover">
          <div class="p-4">
            <p class="text-lg font-bold text-gray-800">{{ sweet.name }}</p>
            <p class="text-gray-600 mt-2">{{ sweet.price }}</p>
            <p class="text-sm text-gray-600 mt-2">{{ sweet.description }}</p>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-8">
        <button
          class="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
          @click="goToShop"
        >
          See our sweets
        </button>
      </div>
    </div>

    <div class="mt-8">
      <h2 class="text-3xl font-bold">Events at Sally's Sweets</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        <div v-for="(event, index) in events" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden">
          <img :src="event.image" :alt="event.name" class="w-full h-72 object-cover">
          <div class="p-4">
            <p class="text-lg font-bold text-gray-800">{{ event.name }}</p>
            <p class="text-gray-600 mt-2">{{ event.description }}</p>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-8">
        <button
          class="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
          @click="goToEvents"
        >
          See more events
        </button>
      </div>
    </div>

    <div class="mt-8">
      <div class="max-w-lg mx-auto bg-pink-500 rounded-lg shadow-lg p-8 text-white">
        <h2 class="text-3xl font-bold text-center mb-4">Subscribe Us!!!!</h2>
        <form @submit.prevent="subscribe" class="flex justify-center items-center flex-wrap">
          <input 
            v-model="email"
            type="email" 
            class="border p-2 w-full md:w-auto mb-2 md:mb-0 mr-2"
            placeholder="Enter your email">
          <button
            type="submit"
            class="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"    
          >
            Subscribe
          </button>
        </form>
        <p v-if="subscribed" class="text-center mt-4">
          Subscribed successfully!
        </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      subscribed: false,
      popularSweets: [
        { name: 'Chocolate Bars', image: 'vue-project\src\images\Retro n.webp', price: '$2 each', description: 'Variety of delicious chocolate bars.' },
        { name: 'American Candy', image: 'american candy.jpeg', price: '$2 each', description: 'Indulge in some of the best American sweets.' },
        { name: 'Pick and Mix', image: 'pick and mix.jpeg', price: '$2 per pack', description: 'A great mix of candies to pick from.' },
        { name: 'Retro Candy', image: 'retro candy.jpeg', price: '$2 per pack', description: 'Throwback to the golden days with these sweets.' }
      ],
      events: [
        { name: 'Retro Nights', image: 'C:\Users\WW\Desktop\Sally sweets\vue-project\src\images\rn.jpeg', description: 'Enjoy our retro-themed nights with candy from yesteryear. Sweet packages available.' },
        { name: 'Private Functions', image: 'C:\Users\WW\Desktop\Sally sweets\vue-project\src\images\pf.jpeg', description: 'Host your private party or corporate event in our shop. Catering and sweets packages available.' },
        { name: "Children's Parties", image: 'C:\Users\WW\Desktop\Sally sweets\vue-project\src\images\children party.jpeg', description: "We offer party packages with sweets, decorations, and favors to make your child's day special." }
      ]
    }
  },
  methods: {
    goToShop() {
      this.$router.push('/shop');
    },
    goToEvents() {
      this.$router.push('/events');
    },
    goToLogin() {
      this.$router.push('/register');
    },
    subscribe() {
      // Call API to subscribe
      
      this.subscribed = true;
    }
  }
}
</script> 
 -->
