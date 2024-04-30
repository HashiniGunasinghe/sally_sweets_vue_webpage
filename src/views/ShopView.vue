<template>
    <div class="bg-pink-100px-4 py-5 sm:px-6">
       <h2 class="text-xl font-bold leading-6 text-gray-900">Sweet Categories</h2>
    </div>
   
    <div class="px-4 py-5 sm:px-6">
       <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         <div v-for="category in categories" :key="category.id" class="bg-white p-4 rounded shadow-sm hover:shadow-md">
           <img :src="category.image" :alt="category.name" class="w-60 h-60 object-cover mb-2 rounded">
           <h3 class="text-xl font-semibold leading-5 text-gray-900">{{ category.name }}</h3>
           <p class="text-gray-600">{{ category.description }}</p>
           <p>Price:$2 {{ category.price }}</p> 
           <router-link to="/about" class="inline-block px-4 py-2 mt-4 text-sm font-semibold text-white bg-blue-600 rounded hover:bg-blue-700">Shop now</router-link>
          
         </div>
       </div>
    </div>
    <div class="flex justify-center">

<div class="calori bg-pink-500 p-8 rounded-lg shadow-lg max-w-md">

  <h2 class="text-2xl font-bold text-white mb-4">Calorie Calculator</h2>

  <input class="w-full rounded p-2 text-black" type="text" v-model="food" placeholder="Enter food name...">

  <p v-if="calories" class="text-xl font-bold text-white mt-4">
    Calories: {{ calories }}
  </p>

  <div class="flex justify-between mt-4">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" @click="getCalories">
      Get Calories
    </button>

    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" @click="clearInput">
      Clear
    </button>
  </div>

</div>

</div>


  <!-- <div class="cardRight">
  <div class="signUpCard bg-pink-500 py-12 px-10 rounded-lg shadow-lg text-white">
    <p class="text-2xl font-bold text-center">
      LOGIN TO GET YOUR DISCOUNT VOUCHER!!!
    </p>
  </div>
</div> -->


<br>

   </template>



<script>
// Import images
import chocolateBarsImg from '@/images/chocolate bars.jpeg';
import pickAndMixImg from '@/images/pick and mix.jpeg';
import retroImg from '@/images/retro candy.jpeg';
import americanCandyImg from '@/images/american candy.jpeg';
import lollypopImg from '@/images/lollypop.jpeg';
import cookies from '@/images/cookies.jpeg';
import kitkat from '@/images/kitkat chocolate.jpeg';
import twix from '@/images/twix chocolate.jpeg';
import fr from '@/images/ferera rocher chocolate.jpeg';
import dmilk from '@/images/dairy milk.jpeg';
import ccandy from '@/images/cotton candy.jpeg';

import axios from 'axios';
const API_KEY = '2a2d10bb36msh203a8e57782836ap1ab1d1jsn6e13b07d8f24';




export default {
  data() {
    return {
      categories: [
        { 
          id: 1,
          name: 'Chocolate Bars',
          description: 'Variety of delicious chocolate bars.',  
        //   price: $1 ,
          image: chocolateBarsImg
        },
        {
          id: 2, 
          name: 'Pick-and-mix',
          description: 'A great mix of candies to pick from.',
        //   price: $3,
          image: pickAndMixImg
        },
        {
          id: 3,
          name: 'Retro Candy',
          description: 'Throwback to the golden days with these sweets.',
        //   price: $3 ,
          image: retroImg
        },
        {
          id: 4, 
          name: 'American Candy',
          description: 'Indulge in some of the best American sweets.',
        //   price: $2 ,
          image: americanCandyImg
        },
        {
          id: 5, 
          name: 'Lollypop',
          description: 'A colorful and sugary treat on a stick, perfect for a whimsical and nostalgic indulgence.',
        //   price: $1 ,
          image: lollypopImg
        },
        {
          id: 6, 
          name: 'Cookies',
          description: 'Crispy on the outside, chewy on the inside, these baked delights come in various flavors, satisfying sweet cravings with every bite.',
        //   price: $2 ,
          image: cookies
        },
        {
          id: 7, 
          name: 'Kit-Kat',
          description: 'A classic chocolate bar with layers of crispy wafer, providing a satisfying combination of crunch and creamy milk chocolate.',
        //   price: $3 ,
          image: kitkat
        },
        {
          id: 8, 
          name: 'Twix Chocolate',
          description: 'Indulge in some of the best American sweets.',
        //   price: $3 ,
          image: twix
        },
        {
          id: 9, 
          name: 'Ferrero Rocher',
          description: 'A luxurious confection featuring a whole hazelnut surrounded by a delicate layer of praline, crisp wafer, and smooth milk chocolate, creating an elegant and indulgent experience.',
        //   price: $3 ,
          image: fr
        },
        {
          id: 10, 
          name: 'Dairy Milk',
          description: 'Creamy and velvety, this iconic milk chocolate bar is a timeless favorite, delivering a rich and satisfying cocoa experience.',
        //   price: $3 ,
          image: dmilk
        },
        {
          id: 11, 
          name: 'Cotton Candy',
          description: 'Fluffy and spun to perfection, this sugary confection melts in the mouth, offering a cloud-like sweetness reminiscent of fairgrounds and carnivals.',
        //   price: $1 ,
          image: ccandy
        }

      ],
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




<!-- <style>

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

</style>
 -->
