import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// Default value of smoothies
const vaciarsmoo = { 
  name : '',
  fruit :[''],
  liquids: '',
  proteins:  '',
  taste: 0,

}
export default new Vuex.Store({
  state: {
    smoothie:{
      ...vaciarsmoo
    },
// Where the new smoothies will be kept
    smoothies:[],
//Fruits value
    fruits:[
      {value: 'Watermelon' , stamina: 6, text : 'Watermelon' },
      {value: 'Strawberry', stamina: 5, text : 'Strawberrry'},
      {value: 'Pineapple', stamina: 6, text : 'Pineapple' },
      {value: 'Orange', stamina: 10, text : 'Orange'},
      {value: 'Kiwi', stamina: 7, text : 'Kiwi'},
      {value: 'Banana', stamina: 9, text : 'Banana'},
      {value: 'Limes', stamina: 4, text : 'Limes' }],
//Liquids Value
    liquids:[
      {value: 'Milk', stamina: 4, text : 'Milk' },
      {value: 'Water', stamina: 0, text : 'Water'},
      {value: 'Coconut Water', stamina: 2, text : 'Coconut Water' },
      {value: 'Soy Milk', stamina: 3, text : 'Soy Milk'},
      {value: 'Almond Milk', stamina: 1, text : 'Almond Milk'}],
//Proteins Value
    proteins:[
      {text: 'Vanilla', value : 'Vanilla' },
      {text: 'Chocolate', value : 'Chocolate'},
      {text: 'Coconut', value : 'Coconut' },
      {text: 'Caramel', value : 'Caramel'},
      {text: 'Without flavor', value : 'Without flavor'}],
  },
  mutations: {  
// Function to add smoothies
    aggSmoothie(state,smoothie){
      state.smoothies.push(smoothie)
      localStorage.setItem ('Smothidb', JSON.stringify(state.smoothies));
// Default value smoothie
      state.smoothie = { ...vaciarsmoo, };
    },
// Function to save smoothies in the localStorage
    obtSmoothie(state){
    let SmotDb = JSON.parse(localStorage.getItem('Smothidb'))
         if(SmotDb === null){
         state.smoothies = [];
       }else{
         state.smoothies = SmotDb;
         }
        },      
   },
  
  actions: {
  },

  modules: {
  },
  
})
