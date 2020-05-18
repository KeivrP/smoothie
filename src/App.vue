<template>
  <v-app class="bgd">
     <v-content>
           <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import styles from '@/assets/background.css'


export default {
  name: 'App',

  
  data: () => ({
    //
  }),
};
</script>

