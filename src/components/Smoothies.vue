<template>
  <div
     class="container"
           >
     <v-app-bar
       class="pnl"
         >
       <v-btn color="dark" icon text :to="{name : 'Primera'}">
          <v-icon>keyboard_backspace</v-icon>
       </v-btn>
           <v-toolbar-title class="text-center">Smoothie Match</v-toolbar-title>   
     </v-app-bar>
            <img src="@/assets/logos.png" class="img">
        <v-container>
           <v-row justify="center" no-gutters>
              <v-expansion-panels popout>                
                   <!-- array to show created smoothies -->
                  <v-expansion-panel
                      v-for="(batidos,i) in smoothies"
                      :key="i"
                      >
                     <v-expansion-panel-header color="pink lighten-5" >
                       <v-row align="center">
                        <v-col cols="7">
                               <!-- name smoothie -->
                        <h3>{{batidos.name}}</h3>
                        </v-col>
                         <v-col cols="5" class="text-end">
                          <span class="mr-3">
                          <!-- taste smoothie -->
                          <v-icon color="red" >whatshot</v-icon>
                        <small> {{batidos.taste}}% </small>
                         </span>
                         <span>
                          <v-icon color="green">favorite</v-icon>  
                          <!-- healthy smoothie -->
                        <small>{{calcularSaludable(batidos)}}</small>
                        </span>
                       </v-col>
                       </v-row>
                     </v-expansion-panel-header>
               <v-expansion-panel-content class="frt" >
                   <ul class="mt-5">
                     <h4> Fruits:</h4>
                     <!-- array of fruit content -->
                       <li v-for="(frutas, i) in batidos.fruit" :key="i">
                              {{frutas}}
                       </li>
                           <h4> Liquids:</h4>
                       <li>{{batidos.liquids}}</li>
                           <h4> Proteins:</h4>
                       <li>{{batidos.proteins}}</li>
                   </ul>
               </v-expansion-panel-content>
           </v-expansion-panel>
        </v-expansion-panels>
     </v-row>
   </v-container>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import styles from '@/assets/background.css'
  export default {
    name: 'Smoothies',

    data: () => ({
        panel: [0, 1],
        disabled: false,
        readonly: false,
      
    }),
    computed:{
      ...mapState (['smoothies', 'fruits', 'liquids'])
    },
    methods:{
       ...mapMutations(['obtSmoothie']),
      calcularSaludable(smoothie) {
        let healthy = 0;
// find the each fruit of the smoothie and add the stamina value
        smoothie.fruit.forEach(fruitName => { 
          const fruitFinded = this.fruits.find(f => f.value === fruitName);
          healthy += fruitFinded.stamina;
        });
  // find and add the value of the liquid
        const liquidFinded = this.liquids.find(liq =>  liq.value === smoothie.liquids);
        healthy += liquidFinded.stamina;
        
        return healthy;
      },
          
    },
    mounted(){ 
       this.obtSmoothie()

    },  
      
  }

</script>
