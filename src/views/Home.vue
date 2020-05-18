<template>
  <div class="home bgd">
     <v-content>
      <Create/>
    </v-content>
  </div>
</template>

<script>
import Create from '@/components/Create';
import styles from '@/assets/background.css'


export default {
  name: 'Home',

  components: {
   Create,
  },

  data: () => ({
    //
  }),
};
</script>
