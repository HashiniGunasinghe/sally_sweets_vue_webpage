<!-- <template>
    <div class="wrapper" id ="event">
        <h1>this is event</h1>
    </div>
</template> -->

<template> 
    <div class="flex flex-col items-center bg-pink-100">
         <h1 class="text-4xl font-bold text-center text-black my-8">Sally Sweets Events</h1>
          <div class="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-4"> 
            <div class="flex flex-col items-center"> <img class="w-64 h-64 object-cover rounded-lg shadow-lg" src="C:\Users\WW\Desktop\Sally sweets\vue-project\src\images\rn.jpeg" alt="Retro Night">
         <h2 class="text-2xl font-bold text-center text-gray-800 my-2">Retro Nights</h2>
          <p class="text-center text-gray-600">Relive the good old days with our retro nights, featuring classic tunes, movies, and games!</p> </div>
           <div class="flex flex-col items-center"> <img class="w-64 h-64 object-cover rounded-lg shadow-lg" src="C:\Users\WW\Desktop\Sally sweets\vue-project\src\images\children party.jpeg" alt="Children's Party"> 
        <h2 class="text-2xl font-bold text-center text-gray-800 my-2">Children's Parties</h2> 
        <p class="text-center text-gray-600">Make your child's birthday extra sweet with our fun-filled parties, complete with games, treats, and decorations!</p> </div> 
        <div class="flex flex-col items-center"> <img class="w-64 h-64 object-cover rounded-lg shadow-lg" src="C:\Users\WW\Desktop\Sally sweets\vue-project\src\images\pf.jpeg" alt="Private Function"> 
        <h2 class="text-2xl font-bold text-center text-gray-800 my-2">Private Functions</h2> <p class="text-center text-gray-600">Book our side room for your next private function and let us provide you with a variety of sweet packages to choose from!</p>
        <div class="flex justify-center">
  <button
    class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    @click="goTosweet"
  >
    See our sweet packages
  </button>
</div>
 



        </div>
         </div> 
         <div class="w-full max-w-xl p-4 mt-8 bg-white shadow-lg rounded-lg"> 
            <h2 class="text-2xl font-bold text-center text-gray-800 my-4">Book an Event</h2> 
            <form class="space-y-4"> <div> <label class="block text-gray-700 text-sm font-bold mb-2" for="eventType">Event Type</label> 
            <select class="w-full p-2 border border-gray-400 rounded-lg" id="eventType" name="eventType"> <option value="retroNight">Retro Night</option> 
            <option value="childrensParty">Children's Party</option> <option value="privateFunction">Private Function</option> 
            </select> 
            </div> 
            <div> 
                <label class="block text-gray-700 text-sm font-bold mb-2" for="eventDate">Event Date</label> 
                <input class="w-full p-2 border border-gray-400 rounded-lg" id="eventDate" name="eventDate" type="date"> 
            </div>
             <div> 
                <label class="block text-gray-700 text-sm font-bold mb-2" for="guestNumber">Number of Guests</label>
                 <input class="w-full p-2 border border-gray-400 rounded-lg" id="guestNumber" name="guestNumber" type="number"> 
                 </div>
                 <div> 
                <label class="block text-gray-700 text-sm font-bold mb-2" for="guestNumber">Number of Sweet packages</label>
                 <input class="w-full p-2 border border-gray-400 rounded-lg" id="sweerNumber" name="sweetNumber" type="number"> 
                 </div>
                  <button class="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
                   </form> 
                   </div> </div> 
                   </template> 
                   
                   <script> 
                   export default { name: 'EventsPage'  ,
                   methods: {
                   goTosweet() {
                   this.$router.push('/sweetpack');
                    }
                }
            }
                   </script>