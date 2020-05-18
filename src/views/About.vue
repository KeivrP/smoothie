<template>
  <div class="about bgd">
    <v-content>
      <Smoothies/>
    </v-content>
  </div>
</template>
<script>
import Smoothies from '@/components/Smoothies';

export default {
  name: 'About',

  components: {
   Smoothies,
  },

  data: () => ({
    //
  }),
};
</script>

