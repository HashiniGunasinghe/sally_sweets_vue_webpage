



<!-- <template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }  
}
</style> -->


<!-- <template>

  <div class="about">
    <div class="calculator">




    <input v-model="food">

    <button @click="getCalories">Get Calories</button> 

    <p>Calories: {{ calories }}</p>

  </div>
  </div>
</template>

<script>
import axios from 'axios';

const API_KEY = '2a2d10bb36msh203a8e57782836ap1ab1d1jsn6e13b07d8f24';

export default {

  data() {
    return {
      food: '',
      calories: null
    }
  },

  methods: {
  getCalories() {
    const url = 'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition';
    
    axios.get(url, {
      headers: {
        'X-Api-Key': API_KEY
      }  
    })
    .then(response => {
      this.calories = response.data.items[0].calories;
    })
  }
}

}  
</script> -->

<!-- <template>
  <div>
    <input type="text" v-model="food" placeholder="Enter food name..." @change="searchFood">
    
    <p v-if="calories">Calories: {{ calories }}</p>
    <button @click="clearInput">Clear</button>
  </div>
</template>

<script>
import axios from 'axios';

const API_KEY = '2a2d10bb36msh203a8e57782836ap1ab1d1jsn6e13b07d8f24';

export default {
  data() {
    return {
      food: '',
      calories: null
    }
  },
  methods: {
    async searchFood() {
      try {
        const response = await axios.get(`https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${this.food}`, {
          headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
          }
        });

        this.calories = response.data[0].calories;
      } catch (error) {
        console.error(error);
      }
    },
    clearInput() {
      this.food = '';
      this.calories = null;
    }
  },
  watch: {
    food: function() {
      this.searchFood();
    }
  }
}
</script>

<style>
/* Styles */ 

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
 

  input {
    width: 100%;
    padding: 12px 10px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #63bbc5;
    border-radius: 4px;
  }

  input:focus {
    border-color: #fd17c0;
  }

  button {
    background-color: #0b22ef;
    color: white;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #dee2e6;
  }

  p {
    margin: 0;
    padding: 12px 10px;
    background-color: #fd17c0;
    border: 1px solid #dee2e6;
    border-radius: 4px;
  }
}

</style> -->



<!-- <template>

  <div class="max-w-3xl mx-auto p-4">

    <input 
      v-model="foodName"
      type="text"
      class="border px-2 py-1 rounded"
      placeholder="Enter food name">

    <button
      @click="getRecipe"
      class="bg-blue-500 text-white px-4 py-2 rounded ml-2">
      Generate Recipe
    </button>

    <button 
      @click="clearForm"
      class="bg-gray-500 text-white px-4 py-2 rounded ml-2">
      Clear
    </button>

    <div v-if="recipe" class="mt-8 bg-white p-4 rounded shadow">
    
    
    </div>

  </div>

</template>


<script>
import axios from 'axios';
const API_KEY='2a2d10bb36msh203a8e57782836ap1ab1d1jsn6e13b07d8f24'
export default {

  data() {
    return {
      foodName: '',
      recipe: null 
    }
  },

  methods: {
    
    async getRecipe() {
     
      
      this.recipe = response.data
    },

    clearForm() {
      this.foodName = ''
      this.recipe = null 
    }

  }

}  
</script> -->

<!-- 
<template>
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


<!-- <template>
  <div class="signUpCard bg-pink-500 py-12 px-10 rounded-lg shadow-lg text-white">
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


</div>
</template>


<script>
export default {
  data() {
    return {
      email: '',
      subscribed: false
    }
  },
  methods: {
    
    subscribe() {
      
      
      this.subscribed = true;
    }
  }
}
</script> -->


<template>

  <div class="p-4 max-w-lg mx-auto">

    <h1 class="text-2xl font-bold mb-4">Print Voucher</h1>

    <div v-if="user" class="bg-white p-4 rounded shadow">

      <h2 class="text-xl font-semibold mb-2">
        Hi mate! Here is your voucher:
      </h2>

      <div class="border p-4 mb-4">
        <h3 class="text-lg font-bold mb-2">Voucher #{{ user.voucherNumber }} </h3>
        <h3 class="text-lg font-bold mb-2">$10 Off Coupon</h3>
        <p>Redeem this voucher for $10 off your next purchase.</p>
        <p class="text-gray-500 text-sm">Expires: {{ expiration }}</p>
      </div>

      <button
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        @click="printCoupon"
      >
        Print Voucher
      </button>

    </div>

    <div v-else class="bg-yellow-100 p-4 rounded shadow">
      Please login to see your voucher.
    </div>

  </div>

</template>

<script>

export default {

  data() {
  return {
    user: {
      
    },
    voucherCount: 0, 
    expiration: '11/02/2024'
  }
},

mounted() {
  this.generateVoucherNumber(); 
},

methods: {
  generateVoucherNumber() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000); 
    this.user.voucherNumber = `${timestamp}-${random}`;
  } ,
  
  printCoupon() {
    this.generateVoucherNumber();
    window.print();
  }
}

}
</script>
