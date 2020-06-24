<template>
  <div id="app">
    <navigation></navigation>
    <router-view class="container"/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
  components: {
    Navigation,
  },
};
</script>

<style lang="scss">
</style>
