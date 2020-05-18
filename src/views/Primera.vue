<template>
  <div class="bgd">
     <v-content>
     <HelloWorld/>
    </v-content>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld';
import styles from '@/assets/background.css'

export default {
  name: 'Primera',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>

