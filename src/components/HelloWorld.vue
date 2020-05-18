<template>
   <div
      class="container"          
   >
      <v-app-bar
      class="pnl"     
    >
       <v-toolbar-title class="text-center">Smoothie Match</v-toolbar-title>   
     </v-app-bar>
            <img src="@/assets/logos.png" class="img">
        <v-container>
           <v-row>
            <v-col>
              <v-card
                class="pa-2"
                title
                >
                 <p class="font-weight-bold text-center">Smoothie was designed by Smoothie specialists to find the perfect flavor to match your mood and guide you into a healthier life</p>
               </v-card>
            </v-col>    
           </v-row>
        </v-container>
        <v-container>
<!-- open the item to add a new smoothie -->
           <v-row >
            <v-col  class="text-center">
              <div class="my-2">
               <v-btn x-large color="pink lighten-4" :to="{name : 'home'}" >Create your own smoothie</v-btn>
              </div>
              </v-col>    
           </v-row>
        </v-container>
        <v-container>
          
<!-- will show the smoothies already created -->
           <v-row >
             <v-col  class="text-center">
              <div class="my-2">
               <v-btn x-large white--text color="light-green lighten-4 "  :to="{name : 'about'}" >Take me to the smoothies!</v-btn>
              </div>
              </v-col> 
           </v-row>
        </v-container>
  </div>
</template>

<script>
  import styles from '@/assets/background.css'
  export default {
    name: 'HelloWorld',

    data: () => ({
      
    }),
     
  }

</script>
