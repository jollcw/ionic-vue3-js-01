<template>
  <ion-app>
    <ion-router-outlet />
    <!-- <memories-page /> -->
    <!-- <home-page /> -->
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
// import MemoriesPage from './pages/MemoriesPage.vue';
// import MemoriesPage from './pages/MemoriesPage'
// import HomePage from './pages/HomePage.vue';
export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    // MemoriesPage,
    // HomePage
  }
});
</script>