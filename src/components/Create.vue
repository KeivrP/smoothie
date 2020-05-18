<template>
  <div class="Create">
   <v-card
    max-width="500"
    class=" mx-auto mt-5 bgd2"
   >
    <v-app-bar
    class="pnl"
    >
       <v-btn  color="dark" icon text :to="{name : 'Primera'}">
       <v-icon>keyboard_backspace</v-icon>
       </v-btn>
       <v-toolbar-title class="text-center mx-2">Smoothie Match</v-toolbar-title>   
     </v-app-bar>

        <v-container>
             <v-form v-model="valid">
               <!-- agg smoothie name -->
               <v-row 
                 class="centro"                              
                 >
                  <v-col cols="10" sm="10">
                    <p class="font-weight-bold">Smoothie Name:</p>
                      <v-text-field
                        color="green"
                        v-model="smoothie.name"
                        :rules="nameRules"
                        label="Name"
                        required
                       ></v-text-field>
                  </v-col>
              </v-row>
              <!-- agg smoothie fruit -->
                <v-row 
                   class="centro"                  
                 >
                   <v-col cols="8" sm="8">
                     <p class="font-weight-bold black--text">Fruits:</p>
                       <v-select
                        v-model="smoothie.fruit[0]"
                        :rules="nameRules"
                        :items="fruits"
                        label="Fruits"
                        dense
                       ></v-select>
                    </v-col>
                    <v-col cols="2" sm="2" align-self="center">
                      <v-btn :disabled="disabledAddFruit" color="green" icon text @click="addFruit">
                        <v-icon>add_box</v-icon>
                      </v-btn>
                    </v-col>
                </v-row>
                <!-- other fruits -->
                <div v-for="(item, i) in smoothie.fruit" :key="`smoothie-fruit-${i}`">
                    <v-row 
                   class="centro"
                   
                   v-if="i > 0"
                    >
                   <v-col cols="8" sm="8">
                     <p class="font-weight-bold">Fruits:</p>
                       <v-select
                        v-model="smoothie.fruit[i]"
                        :items="fruits"
                        label="Fruits"
                        dense
                       ></v-select>
                    </v-col>
                    <v-col cols="2" sm="2" align-self="center">
                      <v-btn color="red" icon text @click="removeFruit(i)">
                        <v-icon>clear</v-icon>
                      </v-btn>
                    </v-col>
                </v-row>
                  </div>
                  <!-- add smoothie liquids -->
                <v-row 
                   class="centro"                   
                 >
                   <v-col cols="10" sm="10">
                     <p class="font-weight-bold">Liquids:</p>
                       <v-select
                       color="green"
                        v-model="smoothie.liquids"
                        :rules="nameRules"
                        :items="liquids"
                        label="Liquids"
                        dense
                       ></v-select>
                    </v-col>
                </v-row>   
                <!-- add proteins smoothie  -->
                <v-row 
                   class="centro"                 
                 >
                   <v-col cols="10" sm="10">
                     <p class="font-weight-bold">Proteins:</p>
                       <v-select
                        v-model="smoothie.proteins"
                        :rules="nameRules"
                        :items="proteins"
                        label="Proteins"
                        dense
                       ></v-select>
                    </v-col>
                </v-row>  
                <!-- add smoothie taste   -->
                <v-row 
                   class="ml-6"                
                 >
                  <v-icon color="red" >whatshot</v-icon>
                   <v-col cols="4" sm="3">
                     <p class="font-weight-bold">Taste:</p>                  
                       <v-text-field
                         value="Taste"
                         :rules="tasterules"
                         suffix="%"
                         v-model="smoothie.taste"
                         outlined
                         type="number"
                      >
                      </v-text-field>                     
                   </v-col>
                   <v-col cols="10" sm="12" class="text-center">
                     <!-- submit button -->
                     <v-btn class="ma-2"  color="indigo white--text" @click="submit" v-if="valid">Save it!
                       <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
                     </v-btn>
                     <!-- clean button -->
                     <v-btn class="ma-2"  color="red white--text"  @click="onReset" >Clean!
                       <v-icon dark right>mdi-cancel</v-icon>
                     </v-btn>
                   </v-col>
                </v-row>    
              </v-form>
        </v-container>
     </v-card>
     <heart v-if="showlike"/>
   </div>
  
</template>

<script>
   
   import {mapState, mapMutations} from 'vuex';
   import styles from '@/assets/background.css';
   import heart from '@/components/heart.vue'
 
  export default {
    name: 'Create',

    components: {
   heart,
  },

    data: () => ({
  // check if all data has information
        showlike : false,
        valid: true,
        nameRules: [
        v => !!v || 'Please is required',
            ],
        tasterules: [
          v => (v !== "" ) || 'Taste Required',
          v =>  (parseInt(v) >= 0) || 'Minimum 0',
          v => (parseInt(v) <= 100) || 'Maximun 100'
        ],
      
    }),
    computed:{
      ...mapState(['fruits','proteins','liquids', 'smoothies', 'smoothie']),
      
// the add fruit button does not activate
      disabledAddFruit() {
      let index = 0;   
      const countFruits = this.smoothie.fruit.length;
      if(countFruits > 0)
        index = countFruits - 1;
      if(!this.smoothie.fruit[index])
        return true;
      return false;
    }
    },
    
    methods:{
      ...mapMutations(['aggSmoothie', 'obtSmoothie', 'volver']),
// submit new smoothie
      submit(){
        this.aggSmoothie(this.smoothie)
// back home
       
        this.showlike = true
        setTimeout(() => {
          this.showlike = false          
          this.$router.push('/')
        }, 1000);
        this.smoothie.fruit = ['']
        
      },
// add fruit new
      addFruit() {
      this.smoothie.fruit.push('');
    },
// remove fruit add
      removeFruit(indexToDelete) {
      const fruitFiltered = this.smoothie.fruit.filter((item, index) => index !== indexToDelete);
      this.smoothie.fruit = fruitFiltered;
    },
    onReset(e) {
        e.preventDefault()
        // Reset our Smothie values
        this.smoothie.name = ''
        this.smoothie.fruit = ['']
        this.smoothie.liquids = ''
        this.smoothie.proteins = ''
        this.showlike = false

      },
    

    }   
       
  }

</script>
